// Leaflet
const locationMap = {
    latitude: 41.3516251,
    longitude: 19.8009014,
};

var mymap = L.map("location__map").setView(
    [locationMap.latitude, locationMap.longitude],
    17
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

L.marker([locationMap.latitude, locationMap.longitude])
    .addTo(mymap)
    .openPopup();
