<script>
  import { onMount } from 'svelte';
  import * as d3 from "d3";

  export let module;

  let svgElement;

  $: {
    module;
    if (ready) { render() }
  }

  let ready = false;
  onMount(async () => {
    render();
    ready = true;
  });

  function render() {
    const svgStyle = getComputedStyle(svgElement);
    const w = +svgStyle.width.replace("px","");
    const h = +svgStyle.height.replace("px","");
    const g = d3.select(svgElement).select("g");

    const divsh = 7;
    const secth = h / divsh;
    const divsw = 10;
    const sectw = w / divsw;
    const {x1, x2, y1, y2} = getCoords(module);

    const lineGen = d3.line();
    const lineData = [];

    for (let i = 0; i < divsw; i++) {
      const x1_ = x1(i);
      const x2_ = x2(x1_, i);
      lineData.push([[x1_, 0],[x2_, h]]);
    }

    for (let i = 0; i < divsh; i++) {
      const y1_ = y1(i);
      const y2_ = y2(y1_, i);
      lineData.push([[0, y1_],[w, y2_]]);
    }

    function getCoords(module) {
      const fn = {
        "academic": {x1: op("x","scl"), x2: op("x","idt"), y1: op("y","scl"), y2: op("y","idt")},
        "code"  : {x1: op("x","rnd"), x2: op("x","rn2"), y1: op("y","rnd"), y2: op("y","rn2")},
        "comics"  : {x1: op("x","rnd"), x2: op("x","idt"), y1: op("y","rnd"), y2: op("y","idt")},
        "cv"      : {x1: op("x","scl"), x2: op("x","inv"), y1: op("y","scl"), y2: op("y","inv")}
      }

      function op(axis, operation = "idt") {
        const s = axis === "x" ? sectw : secth;
        const gs = axis === "x" ? w : h;
        return {
          scl: i => i * s,
          rnd: v => ((Math.random() - 0.5) * s) + (s * v),
          rn2: (v, i) => ((Math.random() - 0.5) * s) + (s * i),
          idt: i => i,
          inv: i => gs - i
        }[operation]
      }

      return fn[module]
    }
    
    g.selectAll("path")
      .data(lineData)
      .join("path")
      .style("stroke", "var(--stroke)")
      .style("stroke-dasharray", /comics/i.test(module) ? "100, 0" : "5, 5")
      .style("fill", "none")
      .transition(300)
      .ease(d3.easeBounceOut)
      .attr("d", d => lineGen(d))
      
  }
</script>
<svelte:window on:resize={() => {render()}} />
<div class="background-container">
  <svg bind:this={svgElement} width="100%" height="100%">
    <g></g>
  </svg>
</div>

<style>
  .background-container {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height:100%;
    z-index: -1;
  }
</style>