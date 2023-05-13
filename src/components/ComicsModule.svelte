<script>
  import DefaultGallery from './DefaultGallery.svelte';
  
  import { lang } from '../stores/translations';
  import { t } from '../stores/translations';
  
  export let data;

  const keys = [...new Set(data.map(d => d.cat))];

  function getFiltered(k) {
    return data.filter(d => d.cat === k);
  }
</script>

<div>
  <p class="block-text">{@html $t.comicsIntro}</p>
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