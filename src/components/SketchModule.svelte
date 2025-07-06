<script>
  import { t } from '../stores/translations';
  import { onMount } from 'svelte';
  import * as d3 from "d3";

  let svgElement;
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

    g.selectAll("g").remove();

    const subG = g.append("g");

    subG.attr(`transform`, `translate(${w/2},${h/2})`);

    const faceSize = h/4;
    const face = subG.append("circle")
      .attr("r", faceSize)
      .attr("fill", "var(--fill)")
      .style("stroke", "var(--stroke)")
      // .style("stroke-dasharray", "5, 5")

    const eyePosX = faceSize*0.35;
    const eyePosY = faceSize*0.3;
    const eyeSize = faceSize/8;

    const leftEye = subG.append("circle")
      .attr("cx", -eyePosX)
      .attr("cy", -eyePosY)
      .attr("r", eyeSize)
      .attr("fill", "var(--fill)")
      .style("stroke", "var(--stroke)")
      // .style("stroke-dasharray", "5, 5")

    const leftEyePupil = subG.append("circle")
      .attr("cx", -eyePosX)
      .attr("cy", -eyePosY)
      .attr("r", eyeSize/2)
      .attr("fill", "var(--stroke)")

    const rightEye = subG.append("circle")
      .attr("cx", eyePosX)
      .attr("cy", -eyePosY)
      .attr("r", eyeSize)
      .attr("fill", "var(--fill)")
      .style("stroke", "var(--stroke)")
      // .style("stroke-dasharray", "5, 5")

    // const rightEyePupil = subG.append("circle")
    //   .attr("cx", eyePosX)
    //   .attr("cy", -eyePosY)
    //   .attr("r", eyeSize/2)
    //   .attr("fill", "var(--stroke)")
    
    
    
  }
  export const data = "";
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