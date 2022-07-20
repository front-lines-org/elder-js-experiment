<div>
  <div style="margin-bottom: 5px;"> 
    <TopBar />
  </div>
    <hr class="divider"/>
    <TabBar tabs={['Home', 'Ukraine', 'Live map', 'Africa', 'Middle East', 'Myanmar', 'Other', 'About us', 'Contribute', 'Links']} let:tab bind:active>
      <Tab {tab}>
        <Label href="test">{tab}</Label>
      </Tab>
    </TabBar>
    <hr class="divider"/>
    <pre class="status">Selected: {active}</pre>
  </div>
  
  <script>
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import TopBar from './TopBar.svelte';
  
    let active = 'Home';
  </script>
  
  <style> 
    hr.divider {
      margin: 0;
    }
  </style>