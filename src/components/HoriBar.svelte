<script>
  export let menuList;
  export let selectedModule;

  import { t } from '../stores/translations';

  function selectModule(i) {
    selectedModule = i;
  }
</script>

<nav class="bar no-select">
  <ul class="bar-list">
    {#each menuList as d}
      <li class="bar-list-element">
        <button class={selectedModule === d ? "selected" : ""} href="/" on:click={() => selectModule(d)}>{$t[d.name]}</button>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .bar {
    border-top: solid 1px var(--stroke);
    border-bottom: solid 1px var(--stroke);
  }
  
  .bar-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style-type: none;
    padding: 0px;
  }

  button {
    border: none;
    background: none;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--stroke);
    cursor: pointer;
  }

  button:hover {
    text-decoration: underline;
  }

  button:active {
    opacity: 0.6;
  }

  .selected {
    color: var(--accent1);
    /* background: var(--stroke); */
  }
</style>