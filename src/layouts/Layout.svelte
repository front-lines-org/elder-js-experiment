<script>
  import style from '../../assets/style.css';
  import smui from '../../assets/smui.css';
  import Header from '../components/Header.svelte';
  export let templateHtml, settings;
</script>

<style>
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>

<svelte:head>
  <!-- Material Icons -->
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <!-- Roboto -->
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />
  <!-- Roboto Mono -->
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto+Mono"
  />
  <script>
    document.addEventListener('ejs', (e) => {
      console.log('Layout.svelte > Component Mount Detail', e.detail);
    });
  </script>
</svelte:head>
<div class="container">
  <Header hydrate-client={{}}/>
  {@html templateHtml}
</div>
<div class="footer">Built with ❤ and <a href="https://elderguide.com/tech/elderjs/">Elder.js</a></div>
