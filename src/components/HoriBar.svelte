<script>
  export let menuList;
  export let selectedModule;

  import { t } from '../stores/translations';

  function selectModule(d) {
    selectedModule = d;
    const url = new URL(window.location);
    url.searchParams.set('s', selectedModule.name);
    window.history.pushState(null, '', url.toString());
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

  @media screen and (max-device-width: 400px) {
    button {
      font-size: 0.9em;
    }

    .bar-list {
      flex-direction: column;
      gap: 1em;
      padding: 0 1em;
    }
  }
</style>