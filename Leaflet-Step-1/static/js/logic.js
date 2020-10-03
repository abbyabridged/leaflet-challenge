// Write function to create map
function createMap(earthquakes) {

  // Create tile layer for map background
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
  });

  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Light Map": lightmap
  };

  // Create an overlayMaps object to hold the earthquakes layer
  var overlayMaps = {
    "Earthquakes": earthquakes
  };

  // Create the map object  
  var map = L.map("mapid", {
    center: [32.715736, -117.161087],
    zoom: 4,
    layers: [lightmap, earthquakes]
  });

  // // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  // L.control.layers(baseMaps, overlayMaps, {
  //   collapsed: false
  // }).addTo(map);

  // Create a legend to display map information
  // var info = L.control({
  //   position: "bottomright"
  // });
  
  // // Add the info legend to the map
  // info.addTo(map);

}

// createMap();

// Write function to create markers
function createMarkers(response) {

  // Select the features property from response
  var features = response.features;
  // console.log(features)

  // Initialise an array to hold the magnitude and depth markers
  var earthquakeMarkers = [];

  // Loop through the features array
  for (var index = 0; index < features.length; index++) {
    var feature = features[index];
    var location = feature.geometry;
    // var magnitude = feature.properties.mag;
    // var depth = feature.geometry.coordinates[2];
    // var place = feature.properties.place;

    // For each earthquake, create a marker and bind a popup with additional information
    var earthquakeMarker = L.marker([location.coordinates[1],location.coordinates[0]])
    .bindPopup("<h3>" + feature.properties.place + "<h3><h3>Magnitude: " + feature.properties.mag + "</h3>");
  
    // Add the marker to the earthquakeMarkers array
    earthquakeMarkers.push(earthquakeMarker);
  }

// console.log(earthquakeMarkers)
// console.log(location)

  // Create a layer group made from the earthquakeMarkers array, pass it into the createMap function
  createMap(L.layerGroup(earthquakeMarkers));
}


// Perform API call to retrieve USGS earthquake data. Call createMarkers when complete.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson", createMarkers);