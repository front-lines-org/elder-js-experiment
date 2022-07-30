<script>
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import TopBar from './TopBar.svelte';
  // props
  export let pages, url;

  let active = pages.find((page) => url.includes(`/${page.slug}/`))?.title || 'Home';
  let pagesMap = new Map(pages.map((page) => [page.title, page.slug]));
</script>

<style>
  :global(.mdc-tab-bar) {
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
    border-right-color: transparent;
    border-left-color: transparent;
    border-bottom-width: 1px;
    border-top-width: 1px;
  }
</style>

<div class="mb-8">
  <div class="mb-3">
    <TopBar />
  </div>
  <TabBar tabs={['Home', ...pages.map((page) => page.title)]} let:tab bind:active>
    <Tab {tab} href="/{pagesMap.get(tab) ?? ''}">
      <Label href="test">{tab}</Label>
    </Tab>
  </TabBar>
</div>
