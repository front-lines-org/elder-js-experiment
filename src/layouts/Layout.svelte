<script>
  import '../../assets/style.css';
  import '../../assets/smui.css';
  import Header from '../components/Header.svelte';
  export let data, templateHtml, request;
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;700&family=Merriweather:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');
  .container {
    max-width: 1185px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>

<svelte:head>
  <!-- Material Icons -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link href="/tailwind.css" rel="stylesheet" />
  <script>
    document.addEventListener('ejs', (e) => {
      console.log('Layout.svelte > Component Mount Detail', e.detail);
    });
  </script>
</svelte:head>
<div class="container">
  <Header
    hydrate-client={{
      pages: data.markdown.page.map((page) => ({ title: page.frontmatter.title, slug: page.slug })),
      url: request.permalink,
    }} />
  {@html templateHtml}
</div>
