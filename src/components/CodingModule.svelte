<script>
  import DefaultGallery from './DefaultGallery.svelte';
  export let data;

  import { lang } from '../stores/translations';

  const keys = [...new Set(data.map(d => d.cat))];

  function getFiltered(k) {
    return data.filter(d => d.cat === k);
  }
</script>

<div>
  {#if data}
    {#each keys as k}
      <DefaultGallery
        data={getFiltered(k)}
        title={k}
        header={d => `${d.name}`}
        subheader={d => `${d["info_"+$lang]}`}
        link={"url"}
        img={"img"}
      />
    {/each}
  {/if}
</div>