/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);
const displayMap = (locations) => {
  console.log(locations);
}

mapboxgl.accessToken = 'pk.eyJ1IjoicGVyb3NreTE2OCIsImEiOiJjbDZvMGExZW8wNXluM2pwZHRiZWl2amM3In0.jiBMiAP6Zl78nnBQB2Oi6Q';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});
