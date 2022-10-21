const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);


{/* <div id='map' style='width: 400px; height: 300px;'></div> */ }
mapboxgl.accessToken = 'pk.eyJ1IjoicGVyb3NreTE2OCIsImEiOiJjbDZuaWhveTkwMTRvM2NtbDU3YjZ0b3p5In0.HmERO2_pdZMlcZbhjDrLYA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/perosky168/cl81n444j00kq14qltq1rz0d8', // style URL
    scrollZoom: false,
    // center: [-118.2437, 34.0522], // starting position [lng, lat]
    // zoom: 9, // starting zoom
    // projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map)

    // Add popup
    new mapboxgl.Popup({
        offset: 30
    })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
        .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
    padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100
    }
});
