<div>
  <div style="margin-bottom: 10px;"> 
    <TopBar />
  </div>
    <TabBar tabs={['Home', 'Ukraine', 'Live map', 'Africa', 'Middle East', 'Myanmar', 'Other', 'About us', 'Contribute', 'Links']} let:tab bind:active>
      <Tab {tab} href="/{tab.replace(/ /g, '_')}">
        <Label href="test">{tab}</Label>
      </Tab>
    </TabBar>
    <pre class="status">Selected: {active}</pre>
  </div>
  
  <script>
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import TopBar from './TopBar.svelte';
  
    let active = 'Home';
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