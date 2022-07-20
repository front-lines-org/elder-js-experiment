<div>
    <!--
      Note: tabs must be unique. (They cannot === each other.)
    -->
    <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
      <!-- Note: the `tab` property is required! -->
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
  
    <pre class="status">Selected: {active}</pre>
  </div>
  
  <script>
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
  
    let active = 'Home';
  </script>