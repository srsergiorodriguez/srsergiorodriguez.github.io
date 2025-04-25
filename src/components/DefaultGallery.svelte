<script>
  export let data;
  export let title;
  export let header;
  export let subheader;
  export let link;
  export let img;

  import { t } from '../stores/translations';

</script>

<div class="block-list">
    
  <h2>{$t[title]}</h2>
  
  {#each data as d}
    <div class="list-container two-col-gallery">
      <div class="gallery-container">
        {#if d[link] !== undefined}
          <a href={d[link]} target="_blank" rel="noreferrer">
            <h3 class="gallery-title">{header(d)}</h3>
            <p>{subheader(d)}</p>
          </a>
        {:else}
          <h3 class="gallery-title">{header(d)}</h3>
          <p>{subheader(d)}</p>
        {/if}
      </div>
      <div class="gallery-container no-select">
        {#if d[link] !== undefined}
          <a href={d[link]} target="_blank" rel="noreferrer">
            <img src={d[img]} alt={header(d)}/>
          </a>
        {:else}
          <img src={d[img]} alt={header(d)}/>
        {/if}
      </div>
    </div>
  {/each}
  
</div>

<style>
  .two-col-gallery {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding: 0.5rem;
  }

  .gallery-container {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 200px;
  }

  img {
    height: 100%;
  }

  img:hover {
    filter: grayscale(100%) invert(100%);
  }

  .gallery-title {
    margin: 0;
  }

  @media screen and (max-device-width: 550px) {
    .two-col-gallery {
      display: flex;
      flex-direction: column;
    }

    .gallery-container {
      height: auto;
      margin: auto;
    }

    img {
      max-height: 200px;
    }
  }
</style>