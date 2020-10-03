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
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [lightmap, earthquakes]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

createMap();

  // Create a legend to display map information

  // Add the info legend to the map
  // info.addTo(map);



// Write function to create markers

  // Select the magnitude property from response.data ("properties" > "mag")
  
  // Select the depth property from response.data ("geometry" > "coordinates" > [2])
  
  // Initialise an array to hold the magnitude and depth markers

//   var earthquakeMarkers = [];


  // Loop through the features array

        // For each earthquake, create a marker and bind a popup with additional information (e.g. "properties" > "place", "mag", "depth")
        
        // Add the marker to the earthquakeMarkers array

  // Create a layer group made from the earthquakeMarkers array, pass it into the createMap function
  


// Perform API call to retrieve USGS earthquake data. Call createMarkers when complete.
