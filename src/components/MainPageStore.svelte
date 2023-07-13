<script>
  import HoriBar from './HoriBar.svelte';
  import { csv, autoType } from "d3";

  import Waitanimation from './Waitanimation.svelte';
  
  import Background from './Background.svelte';

  import { langs, lang } from '../stores/translations';
  import { onMount } from 'svelte';
  import { schema, selectedModule } from '../stores/schema';

  import { page } from '$app/stores';

  const defaultPath = "https://docs.google.com/spreadsheets/d/12fCRM0UOHLNzwF9wWJj9BzbirUivju2macFgadrUEkY/export?format=csv&gid=";

  let ready = false;
  onMount(async () => {
    for (let s of $schema) {
      s.data = {};
      if (s.id !== undefined) s.data = await csv(defaultPath + s.id, autoType);
    }
    if ($page.url.searchParams.has('lang')) {
      $lang = $page.url.searchParams.get('lang') == 'en' ? 'en' : 'es';
    } 
    if ($page.url.searchParams.has('s')) {
      const sectionKeys = $schema.map(d => d.name);
      const sectionParam = $page.url.searchParams.get('s');
      if (sectionKeys.includes(sectionParam)) {
        $selectedModule = $schema.find(d => d.name === sectionParam);
      }
    } 
    ready = true;
  });
  
  function changeLang() {
    $lang = this.value;
    const url = new URL(window.location);
    url.searchParams.set('lang', this.value);
    window.history.pushState(null, '', url.toString());
  }
</script>
<div class="general">
  <Background module={$selectedModule.name} />
  {#if ready}
  <div class="main-container">
    <div class="main-title no-select">
      <div>
        <h1>Sergio Rodríguez Gómez</h1>
      </div>
      <div>
        <select on:change={changeLang}>
          {#each $langs as l}
            <option value={l} selected={$lang == l}>{l}</option>
          {/each}
        </select>
      </div>
    </div>
    <HoriBar menuList={$schema} bind:selectedModule={$selectedModule}/>
    <div class="content">
      <svelte:component this={$selectedModule.module} data={$selectedModule.data}/>
    </div>
    <footer class="footer"></footer>
  </div>
  {:else}
    <Waitanimation />
  {/if}
</div>

<style>
  .general {
    height: 100vh;
  }

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