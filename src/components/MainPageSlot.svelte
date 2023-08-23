<script>
  import HoriBar from './HoriBar.svelte';
  import Background from './Background.svelte';
  import Waitanimation from './Waitanimation.svelte';

  import { langs, lang } from '../stores/translations';
  import { schema } from '../stores/schema';
  
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { csv, autoType } from "d3";

  export let name;
  
  function changeLang() { $lang = this.value }

  const defaultPath = "https://docs.google.com/spreadsheets/d/12fCRM0UOHLNzwF9wWJj9BzbirUivju2macFgadrUEkY/export?format=csv&gid=";

  const sm = $schema.find(d => d.name === name);

  let ready = false;
  onMount(async () => {
    if (sm.id !== undefined && sm.data === undefined) sm.data = await csv(defaultPath + sm.id, autoType);
    if ($page.url.searchParams.has('lang')) {
      $lang = $page.url.searchParams.get('lang') == 'en' ? 'en' : 'es';
    } 
    ready = true;
  });
</script>

<Background module={name} />
<div class="main-container">
  <div class="main-title no-select">
    <div>
      <h1>Sergio Rodríguez Gómez</h1>
    </div>
    <div>
      <select id="lang-selector" on:change={changeLang}>
        {#each $langs as l}
          <option value={l} selected={$lang == l}>{l}</option>
        {/each}
      </select>
    </div>
  </div>
  <HoriBar menuList={$schema} {name}/>
  <div class="content">
    {#if ready}
      <svelte:component this={sm.module} data={sm.data}/>
    {:else}
      <Waitanimation />
    {/if}
  </div>
  <footer class="footer"></footer>
</div>

<style>
  .main-container {
    max-width: 1000px;
    border: solid 1px var(--stroke);
    margin: auto;
    background: var(--fill);
    opacity: 0.97;
  }
  
  .main-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 3rem;
  }

  @media screen and (max-device-width: 450px) {
    .main-container {
      width: 100%;
    }

    .main-title {
      display: flex;
      justify-content:space-evenly;
      padding: 5px;
    }
  }
</style>