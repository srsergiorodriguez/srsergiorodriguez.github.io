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
        <a href={d[link]} target="_blank" rel="noreferrer">
          <h3 class="gallery-title">{header(d)}</h3>
          <p>{subheader(d)}</p>
        </a>
      </div>
      <div class="gallery-container no-select">
        <a href={d[link]} target="_blank" rel="noreferrer">
          <img src={d[img]} alt={header(d)}/>
        </a>
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
    /* height: 150px; */
    padding: 0.5rem;
    /* padding: 0; */
    /* border: solid red 2px; */
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

  .gallery-title {
    margin: 0;
  }
</style>