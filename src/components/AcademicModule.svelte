<script>
  import FilterList from './FilterList.svelte';
  import { t } from '../stores/translations';
  export let data;
</script>

<div>
  <p class="block-text">{@html $t.academicIntro}</p>
  {#if data}
    <FilterList
      {data}
      title={'academicPublications'}
      header={d => `${d.date} — ${d['name_'+d.language]}`}
      subheader={d => `${d.publication}. ${d.info||""} ${d.doi}`}
      link={"doi"}
      filters={["topic", "date", "language"]}
    />
  {/if}
</div>