<script>
  import { onMount } from 'svelte';
  import * as d3 from "d3";
  import { hoveredModule } from '../stores/schema';

  let svgElement;
  let wrapper;
  let ready = false;
  onMount(async () => {
    await setup();
    ready = true;
    render();
  });

  const toHide = ["Gafas", "Boina", "Espiral", "Engranaje"];

  const showKeys = {
    academic: "Gafas",
    comics: "Boina",
    code: "Engranaje",
    cv: "Espiral",
    none: null
  }

  async function setup() {
    const xml = await d3.xml('./sketch/personaje.svg');
    const imported = d3.select(xml.documentElement);

    const mesaNode = imported.select(`#${CSS.escape("Mesa-de-trabajo1")}`).node();
    if (!mesaNode) return

    const rootG = d3.select(svgElement).select("g");
    wrapper = rootG.append('g').attr('class', 'mesa-wrapper');

    wrapper.node().appendChild(mesaNode.cloneNode(true));

    // init hide all
    toHide.filter(d => d !== showKeys[$hoveredModule]).forEach(id => {
      rootG
        .select(`#${CSS.escape(id)}`)
        .style('display', 'none')
        .style('opacity', 0)
    });

    return new Promise(r => r())
  }

  async function render() {
    if (!ready) return

    const { width:w, height:h } = svgElement.getBoundingClientRect();

    const m = {l: w * 0.1, r: w * 0.1, t: h * 0.1, b: h * 0.1};
    const rootW = w - m.l - m.r;
    const rootH = h - m.t - m.b;

    const rootG = d3.select(svgElement).select("g");

    rootG.attr("transform", `translate(${m.l},${m.t})`);

    const bbox = wrapper.node().getBBox();

    // compute scale
    const scale = Math.min(rootW  / bbox.width, rootH / bbox.height);

    // compute translate to center
    const tx = (rootW  - bbox.width  * scale) / 2 - bbox.x * scale;
    const ty = (rootH - bbox.height * scale) / 2 - bbox.y * scale;

    // apply transform
    wrapper.attr('transform', `translate(${tx},${ty}) scale(${scale})`);
  }

  $: if (ready) {
    const key = showKeys[$hoveredModule];
    toHide.forEach(id => {
      const sel = d3.select(svgElement).select(`#${CSS.escape(id)}`);
      if (id === key) {
        // show + fade in
        sel
          .interrupt()                 // cancel any running transition
          .style('display', null)
          .transition().duration(300)
            .style('opacity', 1);
      } else {
        // fade out + then hide
        sel
          .interrupt()
          .transition().duration(500).ease(d3.easeBackOut)
            .style('opacity', 0)
            .on('end', () => sel.style('display', 'none'));
      }
    });
  }
</script>

<svelte:window on:resize={() => {render()}} />

<div class="sketch-container">
  <svg bind:this={svgElement} width="100%" height="50vh">
    <g></g>
  </svg>
</div>

<style>
  svg {
    background: color-mix(in srgb, var(--fill) 40%, transparent);
  }
</style>