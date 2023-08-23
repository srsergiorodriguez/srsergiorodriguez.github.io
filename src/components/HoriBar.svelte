<script>
  import { base } from "$app/paths";

  export let menuList;
  export let name;

  import { t } from '../stores/translations';
</script>

<nav class="bar no-select">
  <ul class="bar-list">
    {#each menuList as d}
      <li class="bar-list-element">
        <a href={base+"/"+d.path}><button class={name === d.name ? "selected" : ""}>{$t[d.name]}</button></a>
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