// Write function to create map

    // Create tile layer for map background

    // Create a baseMaps object to hold the lightmap layer

    // Create an overlayMaps object to hold the earthquakes layer

    // Create a legend to display map information

    // Add the info legend to the map
    info.addTo(map);

// Write function to create markers

  // Select the magnitude property from response.data ("properties" > "mag")
  
  // Select the depth property from response.data ("geometry" > "coordinates" > [2])
  
  // Initialise an array to hold the magnitude and depth markers

  var earthquakeMarkers = [];


  // Loop through the features array

        // For each earthquake, create a marker and bind a popup with additional information (e.g. "properties" > "place", "mag", "depth")
        
        // Add the marker to the earthquakeMarkers array

  // Create a layer group made from the earthquakeMarkers array, pass it into the createMap function
  


// Perform API call to retrieve USGS earthquake data. Call createMarkers when complete.
