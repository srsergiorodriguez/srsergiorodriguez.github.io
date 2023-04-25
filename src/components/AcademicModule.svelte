<script>
  import FilterList from './FilterList.svelte';
  export let data;
</script>

<div>
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