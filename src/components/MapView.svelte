<script>
  import { onMount, onDestroy } from 'svelte';
  import { Map } from 'maplibre-gl';
  import 'maplibre-gl/dist/maplibre-gl.css';
  import polygonSmooth from '@turf/polygon-smooth';
  import mariupol from './mariupol';
  import mariupol2 from './mariupol2';
  import { interpolate } from 'flubber';

  let map;
  let mapContainer;

  function rotateCamera(timestamp) {
    // clamp the rotation between 0 -360 degrees
    // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
    map.rotateTo((timestamp / 300) % 360, { duration: 0 });
    // Request the next frame of the animation.
    requestAnimationFrame(rotateCamera);
  }

  function morphPolygon(timestamp) {
    // clamp the rotation between 0 -360 degrees
    // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
    const interpolater1 = interpolate(
      mariupol.features[0].geometry.coordinates[0],
      mariupol2.features[0].geometry.coordinates[0],
      {
        string: false,
      },
    );
    const interpolater2 = interpolate(
      mariupol.features[1].geometry.coordinates[0],
      mariupol2.features[1].geometry.coordinates[0],
      {
        string: false,
      },
    );

    map.getSource('kherson_russia').setData(
      polygonSmooth(
        {
          ...mariupol.features[0],
          geometry: {
            ...mariupol.features[0].geometry,
            coordinates: [interpolater1(((timestamp / 100) % 100) / 100)],
          },
        },
        { iterations: 2 },
      ),
    );
    map.getSource('kherson_ukraine').setData(
      polygonSmooth(
        {
          ...mariupol.features[1],
          geometry: {
            ...mariupol.features[1].geometry,
            coordinates: [interpolater2(((timestamp / 100) % 100) / 100)],
          },
        },
        { iterations: 2 },
      ),
    );
    // Request the next frame of the animation.
    requestAnimationFrame(morphPolygon);
  }

  onMount(() => {
    const apiKey = 'rANfIxfXlXQBoBgQIQPG';

    const initialState = { lat: 46.65581, lng: 32.6178, zoom: 14 };

    map = new Map({
      container: mapContainer,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      pitch: 70,
      maxPitch: 70,
    });
    map.setMaxPitch(75);
    map.setPitch(75);

    map.on('load', function () {
      // Start the animation.

      var layers = map.getStyle().layers;


      var layers = map.getStyle().layers;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field'] && !['place_city', 'place_region', 'place_town', 'place_village'].includes(layers[i].id)) {
          // remove text labels
          console.log(layers[i]);
          map.removeLayer(layers[i].id);
        }
      }

      // Find the index of the first symbol layer in the map style
      var firstSymbolId;
      console.log(map.getStyle().layers);
      for (var i = 0; i < map.getStyle().layers.length; i++) {
        if (map.getStyle().layers[i].id === 'building') {  
          firstSymbolId = map.getStyle().layers[i].id;
          break;
        }
        
      }

      map.setLayoutProperty('label_country', 'text-field', [
        'format',
        ['get', 'name_en'],
        { 'font-scale': 1.2 },
        '\n',
        {},
        ['get', 'name'],
        {
          'font-scale': 0.8,
          'text-font': ['literal', ['libre Franklin']],
        },
      ]);

      map.addSource('kherson_russia', {
        type: 'geojson',
        data: polygonSmooth(mariupol.features[0], { iterations: 2 }),
      });
      map.addLayer(
        {
          id: 'kherson_russia',
          type: 'fill',
          source: 'kherson_russia',
          layout: {},
          paint: {
            'fill-color': '#ff0000',
            'fill-opacity': 0.5,
          },
        },
        firstSymbolId,
      );

      map.addSource('kherson_ukraine', {
        type: 'geojson',
        data: polygonSmooth(mariupol.features[1], { iterations: 2 }),
      });
      map.addLayer(
        {
          id: 'kherson_ukraine',
          type: 'fill',
          source: 'kherson_ukraine',
          layout: {},
          paint: {
            'fill-color': '#0000ff',
            'fill-opacity': 0.5,
          },
        },
        firstSymbolId,
      );

      morphPolygon(0);
      // rotateCamera(0);
    });
  });

  onDestroy(() => {
    map?.remove();
  });
</script>

<style>
  .map-wrap {
    position: relative;
    width: 100%;
    height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
  }

  .map {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .watermark {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 999;
  }
</style>

<div class="map-wrap">
  <a href="https://www.maptiler.com" class="watermark"
    ><img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" /></a>
  <div class="map" id="map" bind:this={mapContainer} />
</div>
