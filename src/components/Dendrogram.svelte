<script>
  import { onMount } from 'svelte';
  import * as d3 from "d3";
  import { sankey, sankeyLinkHorizontal } from "d3-sankey";

  export let data;
  export let keys;
  const groups = toGraph(data, keys);
  let svgElement;

  onMount(async () => {
    renderViz(groups);
  });

  async function renderViz(data) {
    const svgStyle = getComputedStyle(svgElement);
    const w = +svgStyle.width.replace("px","");
    const h = +svgStyle.height.replace("px","");
    const mw = 0.05 * w;
    const mh = 0.05 * h;
    const wm = w - (mw * 2);
    const hm = h - (mh * 2);

    const svg = d3.select(svgElement);
    svg.selectAll("g").remove();

    const sankeyConstructor = sankey()
      .nodeSort(null)
      .linkSort(null)
      .nodeWidth(10)
      .nodePadding(10)
      .extent([[0, data.nodes.length], [wm, hm]])

    const {nodes, links} = sankeyConstructor({
      nodes: data.nodes.map(d => Object.assign({}, d)),
      links: data.links.map(d => Object.assign({}, d))
    });

    const vizg = svg.append("g")
      .attr("transform",`translate(${mw},${mh})`);

    vizg.append("g")
      .selectAll("rect")
      .data(nodes)
      .join("rect")
        .attr("x", d => d.x0)
        .attr("y", d => d.y0)
        .attr("height", d => d.y1 - d.y0)
        .attr("width", d => d.x1 - d.x0)
        .style("fill", "black")

    vizg.append("g")
      .attr("fill", "none")
      .selectAll("g")
      .data(links)
      .join("path")
        .attr("d", sankeyLinkHorizontal())
        .attr("stroke", "#ccc")
        .attr("stroke-width", d => d.width)
        .style("mix-blend-mode", "multiply")
        .on("mouseover", function(d) {
          const el = d3.select(this);
          el.attr("stroke","red");
        })
        .on("mouseout", function(d) {
          const el = d3.select(this);
          el.attr("stroke","#ccc");
        })

    vizg.append("g")
      .style("font", "10px sans-serif")
      .selectAll("text")
      .data(nodes)
      .join("text")
        .attr("x", d => d.x0 < wm / 2 ? d.x1 + 6 : d.x0 - 6)
        .attr("y", d => (d.y1 + d.y0) / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", d => d.x0 < wm / 2 ? "start" : "end")
        .text(d => d.name)
          .append("tspan")
          .attr("fill-opacity", 0.7)
          .text(d => ` ${d.value.toLocaleString()}`);
  }

  function toGraph(data, keys) {
    let index = -1;
    const nodes = [];
    const nodeByKey = new Map;
    const indexByKey = new Map;
    const links = [];

    for (const k of keys) {
      for (const d of data) {
        const key = JSON.stringify([k, d[k]]);
        if (nodeByKey.has(key)) continue;
        const node = {name: d[k]};
        nodes.push(node);
        nodeByKey.set(key, node);
        indexByKey.set(key, ++index);
      }
    }

    for (let i = 1; i < keys.length; ++i) {
      const a = keys[i - 1];
      const b = keys[i];
      const prefix = keys.slice(0, i + 1);
      const linkByKey = new Map;
      for (const d of data) {
        const names = prefix.map(k => d[k]);
        const key = JSON.stringify(names);
        const value = d.value || 1;
        let link = linkByKey.get(key);
        if (link) { link.value += value; continue; }
        link = {
          source: indexByKey.get(JSON.stringify([a, d[a]])),
          target: indexByKey.get(JSON.stringify([b, d[b]])),
          names,
          value
        };
        links.push(link);
        linkByKey.set(key, link);
      }
    }

    return {nodes, links};
  }

</script>
<svelte:window on:resize={() => {renderViz(groups)}} />
<div>
  <svg bind:this={svgElement} width="100%" height="400px"></svg>
</div>