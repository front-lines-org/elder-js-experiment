<script>
  import style from '../../assets/style.css';
  import smui from '../../assets/smui.css';
  import Header from '../components/Header.svelte';
  export let templateHtml, settings;
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
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
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
