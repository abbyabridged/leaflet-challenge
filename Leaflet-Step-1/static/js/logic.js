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
      
  // Create a legend to display map information
  var legend = L.control({ position: 'bottomright'});

  // When the layer control is added, insert a div with the class of "legend"
  legend.onAdd = function() {
      var div = L.DomUtil.create('div', 'info legend');
      var ranges = [-10, 10, 30, 50, 70, 90];
      
      // Loop through each depth range and specify style and background colour based on getColor function
      ranges.forEach((l, i) => {
          div.innerHTML +=  '<i style="background-color:' + getColor(l+1) + '"></i> '
          + l + (ranges[i + 1] ? '&ndash;' + ranges[i + 1] + '<br>' : '+');
      });
      return div;
  };
  // Add the info legend to the map
  legend.addTo(map);
}

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
        
    // For each earthquake, create a marker and bind a popup with additional information
    var earthquakeMarker = L.circle([location.coordinates[1],location.coordinates[0]],{
      radius:(feature.properties.mag)*15000,
      fillColor: getColor(location.coordinates[2]),
      fillOpacity: 1,
      color: "black",
      stroke: true,
      weight: 0.5
    })
    .bindPopup("<h3>" + feature.properties.place + "<h3><h3>Magnitude: " + feature.properties.mag + "</h3>" + "<h3>Depth: " + location.coordinates[2] + "</h3>");
  
    // Add the marker to the earthquakeMarkers array
    earthquakeMarkers.push(earthquakeMarker);
  }

  // Create a layer group made from the earthquakeMarkers array, pass it into the createMap function
  createMap(L.layerGroup(earthquakeMarkers));
};

// Write function to determine the fill colour of circle marker, based on depth

function getColor(depth){
  if (depth > 90) {
    return "#FF3333";
  }
  else if (depth > 70) {
    return "#FF6633";
  }
  else if (depth > 50) {
    return "#FF9933";
  }
  else if (depth > 30) {
    return "#FFCC33";
  }
  else if (depth > 10) {
    return "#FFFF33";
  }
  else if ( depth > -10) {
    return "#9CFF33";
  }
  else {
    return "#000000";
  }
}

// Perform API call to retrieve USGS earthquake data. Call createMarkers when complete.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", createMarkers)


