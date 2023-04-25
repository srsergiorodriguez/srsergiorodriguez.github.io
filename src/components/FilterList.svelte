<script>
  export let data;
  export let title;
  export let header;
  export let subheader;
  export let link;
  export let filters;

  import { t } from '../stores/translations';

  import Filter from './Filter.svelte';

  let filtered = data;

</script>

<div class="block-list">
    
  <h2>{$t[title]}</h2>

  <Filter bind:filtered {data} {filters} />
  
  {#each filtered as d}
    <div class="list-container">
      <a href={d[link]} target="_blank" rel="noreferrer">
        <h3>{header(d)}</h3>
        <p>{subheader(d)}</p>
      </a>
    </div>
  {/each}
  
</div>