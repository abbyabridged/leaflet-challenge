# Leaflet challenge

### Visualising data with Leaflet

This project is an interactive, dynamic map visualisation of earthquake data. 

![Earthquakes in the last 7 days](https://github.com/abbyabridged/leaflet-challenge/blob/main/images/Earthquakes_Last_7.png?raw=true )

Data is sourced via the [United States Geological Survey (USGS) GeoJSON API feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php), including earthquake data for the past seven days (updated every minute).

![USGA GeoJSON feed](https://github.com/abbyabridged/leaflet-challenge/blob/main/images/usgs-json.png?raw=true)

The map elements have been created using the [Leaflet.js](https://leafletjs.com/) library, with the background map tiles added using Mapbox. 


### How it works

Using geomapping concepts and techniques (e.g. creating maps layers, plotting coordinates, interpreting GeoJSON formatted data), this visualisation allows users to interact with up-to-date earthquake data. 

The size of markers indicates earthquake magnitude, while the colour indicates depth. The popup for each marker shows earthquake details.

![enter image description here](https://github.com/abbyabridged/leaflet-challenge/blob/main/images/animated.gif?raw=true)

### Technologies Used

- JavaScript (d3.js and Leaflet.js libraries)
- APIs ([Mapbox Vector Tiles API](https://docs.mapbox.com/api/maps/#mapbox-styles), [USGS GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php))
- HTML and CSS


> Written with [StackEdit](https://stackedit.io/).