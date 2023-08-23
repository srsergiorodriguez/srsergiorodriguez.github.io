<script>
  import * as d3 from "d3";

  let svgElement;
  let time = [0];

  const interval = setInterval(() => {
    render(time);
    time[0]++;
    if (time[0] > 300) {
      clearInterval(interval);
    }
  }, 25);

  function render(time) {
    const w = 200;
    const h = 200;
    const g = d3.select(svgElement).select("g");

    const r = ((Math.sin(time[0]*0.1) + 1)/2) * h/2;

    g.selectAll("circle")
      .data(time)
      .join("circle")
      .style("stroke", "var(--accent1)")
      .style("stroke-dasharray", r / 10)
      .style("stroke-dashoffset", t => -t)
      .style("fill", "none")
      .attr("cx", w/2)
      .attr("cy", h)
      .attr("r", r)
  }
</script>
<div class="background-container">
  <svg bind:this={svgElement} width="400px" height="400px">
    <g></g>
  </svg>
</div>

<style>
  .background-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 200px;
    margin: auto;
    z-index: -1;
  }
</style>