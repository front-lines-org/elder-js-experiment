<script>
  import { onMount, onDestroy } from 'svelte';
  import { Map } from 'maplibre-gl';
  import 'maplibre-gl/dist/maplibre-gl.css';

  let map;
  let mapContainer;

  onMount(() => {
    const apiKey = 'vlX898alh6ZZiPGxPpk8';

    const initialState = { lat: 47.09514, lng: 37.54131, zoom: 14 };

    map = new Map({
      container: mapContainer,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    map.on('load', function () {
      map.addSource('maine', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [37.554144859313965, 47.108983227433264],
                [37.54350185394287, 47.09756150171916],
                [37.54161357879639, 47.083682706950036],
                [37.544145584106445, 47.081987785295404],
                [37.57427215576172, 47.08596199932665],
                [37.56993770599365, 47.096422115902946],
                [37.57169723510742, 47.101505341283996],
                [37.554144859313965, 47.108983227433264],
              ],
            ],
          },
        },
      });
      map.addLayer({
        id: 'maine',
        type: 'fill',
        source: 'maine',
        layout: {},
        paint: {
          'fill-color': '#ff0000',
          'fill-opacity': 0.5,
        },
      });
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
