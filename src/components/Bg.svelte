<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  export let module;

  let svgElement;
  let prevLineData = [];
  let ready = false;

  // react to module changes once mounted
  $: if (ready) render();

  onMount(() => {
    render();
    ready = true;
  });

  function render() {
    // 1) take a snapshot of the old data before we mutate it
    const oldCache = prevLineData.map(d => ({
      id: d.id,
      points: d.points.map(p => ({ x: p.x, y: p.y }))
    }));

    // 2) layout math
    const { width: w, height: h } = svgElement.getBoundingClientRect();
    const divsw = 10, sectw = w / divsw;
    const divsh = 7,  secth = h / divsh;
    const g = d3.select(svgElement).select('g');
    const { x1, x2, y1, y2 } = getCoords(module, sectw, secth, w, h);

    // 3) generator
    const lineGen = d3.line()
      .x(d => d.x)
      .y(d => d.y);

    // 4) build new lineData with unique IDs
    const lineData = [];
    for (let i = 0; i < divsw; i++) {
      const X1 = x1(i), X2 = x2(X1, i);
      lineData.push({ id: `v${i}`, points: [{ x: X1, y: 0 }, { x: X2, y: h }] });
    }
    for (let i = 0; i < divsh; i++) {
      const Y1 = y1(i), Y2 = y2(Y1, i);
      lineData.push({ id: `h${i}`, points: [{ x: 0, y: Y1 }, { x: w, y: Y2 }] });
    }

    // 5) join + transition
    g.selectAll('path')
      .data(lineData, d => d.id)
      .join('path')
        .style('stroke',      'var(--stroke)')
        .style('fill',        'none')
      .transition()
        .duration(500)
        .ease(d3.easeBounceOut)
        .attrTween('d', function(d) {
          // NOW we look up oldCache (not the new prevLineData!)
          const oldPoints = oldCache.find(p => p.id === d.id)?.points 
                             || d.points;
          const interp = d3.interpolateArray(oldPoints, d.points);
          console.log(oldPoints, d.points)
          return t => lineGen(interp(t));
        })
        .style('stroke-dasharray', /comics/i.test(module) ? '100, 0' : '5, 5');

    // 6) update prevLineData _after_ scheduling the transition
    prevLineData = lineData.map(d => ({
      id: d.id,
      points: d.points.map(p => ({ x: p.x, y: p.y }))
    }));
  }

  function getCoords(mod, sectw, secth, w, h) {
    const fn = {
      academic: {
        x1: i => i * sectw,    x2: (_, i) => i * sectw,
        y1: i => i * secth,    y2: (_, i) => i * secth
      },
      code: {
        x1: i => ((Math.random()-0.5)*sectw) + sectw*i,
        x2: (_,i)=> ((Math.random()-0.5)*sectw) + sectw*i,
        y1: i => ((Math.random()-0.5)*secth) + secth*i,
        y2: (_,i)=> ((Math.random()-0.5)*secth) + secth*i
      },
      comics: {
        x1: i => ((Math.random()-0.5)*sectw) + sectw*i,
        x2: (v)=> v,
        y1: i => ((Math.random()-0.5)*secth) + secth*i,
        y2: (v)=> v
      },
      cv: {
        x1: i => i * sectw,    x2: (v)=> w - v,
        y1: i => i * secth,    y2: (v)=> h - v
      }
    };
    return fn[mod] || fn.academic;
  }
</script>

<svelte:window on:resize={render} />

<div class="background-container">
  <svg bind:this={svgElement} width="100%" height="100%">
    <g></g>
  </svg>
</div>

<style>
  .background-container {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: -1;
  }
</style>
