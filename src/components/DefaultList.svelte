<script>
  export let data;
  export let title;
  export let header;
  export let subheader;
  export let link;

  import { t } from '../stores/translations';

</script>

<div class="block-list">
    
  <h2>{$t[title]}</h2>
  
  {#each data as d}
    <div class="list-container">
      <a href={d[link]} target="_blank" rel="noreferrer">
        <h3>{header(d)}</h3>
        <p>{subheader(d)}</p>
      </a>
    </div>
  {/each}
  
</div>