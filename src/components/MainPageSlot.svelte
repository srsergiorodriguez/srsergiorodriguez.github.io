<script>
  import HoriBar from './HoriBar.svelte';
  import Background from './Background.svelte';
  import { langs, lang } from '../stores/translations';
  import { schema, selectedModule } from '../stores/schema';
  
  function changeLang() { $lang = this.value }
</script>

<Background module={$selectedModule.name} />
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
  <HoriBar menuList={$schema} bind:selectedModule={$selectedModule}/>
  <div class="content">
    <slot />
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