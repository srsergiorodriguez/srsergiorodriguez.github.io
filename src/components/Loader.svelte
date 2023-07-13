<script>
  import { csv, autoType } from "d3";
  import Waitanimation from './Waitanimation.svelte';

  import { lang } from '../stores/translations';
  import { schema } from '../stores/schema';

  import MainPageLoaded from './MainPageLoaded.svelte';

  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  const defaultPath = "https://docs.google.com/spreadsheets/d/12fCRM0UOHLNzwF9wWJj9BzbirUivju2macFgadrUEkY/export?format=csv&gid=";

  let ready = false;
  onMount(async () => {
    for (let s of $schema) {
      s.data = {};
      if (s.id !== undefined) s.data = await csv(defaultPath + s.id, autoType);
    }
    // if ($page.url.searchParams.has('lang')) {
    //   $lang = $page.url.searchParams.get('lang') == 'en' ? 'en' : 'es';
    // } 
    // if ($page.url.searchParams.has('s')) {
    //   const sectionKeys = schema.map(d => d.name);
    //   const sectionParam = $page.url.searchParams.get('s');
    //   if (sectionKeys.includes(sectionParam)) {
    //     $selectedModule = schema.find(d => d.name === sectionParam);
    //   }
    // } 
    ready = true;
  });
  
  function changeLang() { $lang = this.value }
</script>
<div class="general">
  <!-- <a href="./test">TTTTT</a> -->
  {#if ready}
    <MainPageLoaded />
  {:else}
    <Waitanimation />
  {/if}
</div>

<style>
  .general {
    height: 100vh;
  }
</style>