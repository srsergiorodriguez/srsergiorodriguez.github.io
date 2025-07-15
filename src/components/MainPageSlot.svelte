<script>
  import HoriBar from './HoriBar.svelte';
  import Background from './Background.svelte';
  import Waitanimation from './Waitanimation.svelte';

  import { langs, lang, t } from '../stores/translations';
  
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
      $lang = $page.url.searchParams.get('lang') == 'en' ? 'English' : 'Español';
    } 
    ready = true;
  });
</script>

<Background module={name} />
<div class="main-container">
  <div class="main-title-background">
    <div class="main-title no-select">
      <div>
        <a href="/">
          <h1>Sergio Rodríguez Gómez</h1>
        </a>
        <!-- <h2>{$t.portfolio}</h2> -->
      </div>
      <div class="lang-selector-container">
        Idioma/language: 
        <select id="lang-selector" on:change={changeLang}>
          {#each $langs as l}
            <option value={l} selected={$lang == l}>{l}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
  
  <div class="with-background">
    <div class="ribbon-container">
      <h2>{$t.portfolio}</h2>
    </div>
    <HoriBar menuList={$schema.filter(d => d.showOnMenu)} {name}/>
    <div class="content">
      {#if ready}
        <svelte:component this={sm.module} data={sm.data}/>
      {:else}
        <Waitanimation />
      {/if}
    </div>
    <footer class="footer"></footer>
  </div>
  
</div>

<style>
  .main-container {
    max-width: 1100px;
    margin: auto;
  }
  
  .main-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-items: start;
    padding: 20px 3rem;
    background: color-mix(in srgb, var(--fill) 70%, transparent);
  }

  a {
    text-decoration: none;
  }

  .main-title h1 {
    --outline: var(--fill);
    --outline-width: 3px;
    --neg-outline-width: calc(var(--outline-width) * -1);
    font-size: 3.2rem;
    font-weight: 600;
    font-family: var(--titlefont);
    text-shadow:
    var(--outline-width) var(--outline-width) 0 var(--outline),
    var(--neg-outline-width) var(--outline-width) 0 var(--outline),
    var(--neg-outline-width) var(--neg-outline-width) 0 var(--outline),
    var(--outline-width) var(--neg-outline-width) 0 var(--outline);
    /* text-shadow:
    var(--outline-width) var(--outline-width) 0 rgba(255, 0, 225, 0.551),
    var(--neg-outline-width) var(--outline-width) 0 rgba(0, 217, 255, 0.548),
    var(--neg-outline-width) var(--neg-outline-width) 0 yellow,
    var(--outline-width) var(--neg-outline-width) 0 rgba(255, 255, 255, 0.338); */
  }

  .lang-selector-container {
    background: var(--fill);
    border: solid 1px var(--fill);
  }

  .ribbon-container {
    border-top: solid 1px var(--stroke);
    text-align: center;
    /* background: var(--fill); */
  }

  .ribbon-container h2 {
    font-family: var(--titlefont);
    padding: 0.4rem;
    margin: 0;
  }

  .with-background {
    /* background: var(--fill); */
    background: color-mix(in srgb, var(--fill) 90%, transparent);
  }

  @media (max-width: 1000px) {
    .main-title {
      flex-direction: column;
    }
  }

  @media screen and (max-device-width: 450px) {
    .main-container {
      width: 100%;
    }

    .main-title {
      padding: 5px;
    }
  }
</style>