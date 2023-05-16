<script>
  export let data;
  export let filters;

  export let filtered = data;

  import { t } from '../stores/translations';
  import { capitalize } from '../stores/helpers';

  let filterList = filters.map(() => "");

  function setFilter(e, i) {
    filterList[i] = e.target.value;
    applyFilter();
  }

  function reset() {
    filterList = filterList.map(() => "");
    [...document.getElementsByClassName("selector-filter")].forEach(e => e.selectedIndex = 0);
    applyFilter();
  }

  function applyFilter() {
    filtered = data;
    for (let i = 0; i < filterList.length; i++) {
      filtered = filtered.filter(d => {
        if (filterList[i] === "") return true
        return `${d[filters[i]]}`.includes(filterList[i])
      })
    }
  }

  function getOptions(f) {
    let options = [];
    for (let d of filtered) {
      const splitted = `${d[f]}`.split(/,[ ]?/);
      options = [...options, ...splitted];
    }
    return [... new Set(options)].sort()
  }
</script>

<div class="filter-container no-select">
  {#each filters as f, i}
    <div>
      <span>{$capitalize($t[f])}: </span>
      <select class="selector-filter" on:change={e => setFilter(e, i)}>
        <option value={""} selected>{$t.all}</option>
        {#each getOptions(f) as fe}
          <option value={fe}>{fe}</option>
        {/each}
      </select>
    </div>
  {/each}
  
  <button on:click={reset}><img src='./reset.png' alt='reset'></button>
</div>

<style>
  
  img {
    height: 1rem;
  }

  .filter-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: solid 1px var(--stroke);
    padding: 10px;
  }

  button {
    cursor: pointer;
    padding: 0px;
    margin: 0px;
    border: none;
    background: none;
  }

  button:active {
    filter: invert(1);
  }

  button:hover {
    filter: invert(0.5);
  }

  @media screen and (max-device-width: 400px) {
    .filter-container {
      flex-direction: column;
    }
  }
</style>