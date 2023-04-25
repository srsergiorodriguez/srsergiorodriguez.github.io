<script>
  export let data;
  data = {};
  import { t, lang } from '../stores/translations';
  import { capitalize } from '../stores/helpers';
</script>

<div>
  <object class="pdf-container" title="cv" data={`./cv/CV_sergio_rodriguez_gomez_${$lang}.pdf`} type="application/pdf" width="100%" height="700px"></object>
  <div class="button-container">
    <button class="default-button big-button">{`${$capitalize($t.download)} ${$t.cv}`}</button>
  </div>
</div>

<style>
  .pdf-container {
    box-sizing: border-box;
    border-bottom: solid 1px;
  }

  .button-container {
    padding: 1rem;
    margin: auto;
    max-width: 200px;
  }

  .big-button {
    padding: 1rem;
    width: 100%;
    font-size: 1em;
    font-weight: 700;
  }
</style>