<TopAppBar bind:this={topAppBar} variant="static" dense color="secondary">
    <Row>
      <Section>
        <Title><Logo /></Title>
      </Section>
      <Section align="end" toolbar>
        <IconButton class="material-icons" aria-label="Download"
          >search</IconButton
        >
        <IconButton class="material-icons" aria-label="Print this page"
          >more_vert</IconButton
        >
        <IconButton class="material-icons" aria-label="Bookmark this page"
          >menu</IconButton
        >
      </Section>
    </Row>
  </TopAppBar>
  <AutoAdjust {topAppBar}>
    
    
  </AutoAdjust>
  
  <script>
    import TopAppBar, {
      Row,
      Section,
      Title,
      AutoAdjust,
    } from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    import Logo from './Logo.svelte';
    let topAppBar;
  </script>
  
  <style>
    /* Hide everything above this component. */
    :global(app),
    :global(body),
    :global(html) {
      display: block !important;
      height: auto !important;
      width: auto !important;
      position: static !important;
    }
  </style>