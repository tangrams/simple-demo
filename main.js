/*** Map ***/

var map = L.map('map',
    {'keyboardZoomOffset': .05}
);

var layer = Tangram.leafletLayer({
    scene: 'scene.yaml',
    // preUpdate: preUpdate,
    // postUpdate: postUpdate,
    attribution: 'Map data &copy; OpenStreetMap'
});

window.layer = layer;
window.scene = layer.scene;

layer.addTo(map);

map.setView([40.70531887544228, -74.00976419448853], 15);

var hash = new L.Hash(map);

// Resize map to window
function resizeMap() {
    document.getElementById('map').style.width = window.innerWidth + 'px';
    document.getElementById('map').style.height = window.innerHeight + 'px';
    map.invalidateSize(false);
}

window.addEventListener('resize', resizeMap);
resizeMap();

