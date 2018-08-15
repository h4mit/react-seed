import React, { Component } from 'react';
import L from 'leaflet';
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';
// import geojson from 'json!./location.geojson';
let config = {};
config.params = {
  center: [ 34.58, 51.48],
  zoomControl: false,
  zoom: 17,
  maxZoom: 20,
  minZoom: 7,
  scrollwheel: false,
  legends: true,
  infoControl: false,
  attributionControl: true
};
config.tileLayer = {
  uri: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  params: {
    minZoom: 7,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://github.com/h4mit">H4mit</a>',
    id: '',
    accessToken: ''
  }
};

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null,
      subwayLinesFilter: '*',
      numEntrances: null
    };
    this._mapNode = null;
  }

  componentDidMount() {
    if (!this.state.map) this.init(this._mapNode);
  }


  componentWillUnmount() {
    this.state.map.remove();
  }



  init(id) {
    const _this = this;
    if (this.state.map) return;
    config.params.center = this.props.center || config.params.center;
    let map = L.map(id, config.params);
    L.control.zoom({ position: "bottomleft"}).addTo(map);
    L.control.scale({ position: "bottomleft"}).addTo(map);
    map.on('click', function(e) {
      _this.props.mapClick([e.latlng.lat , e.latlng.lng]);
    });
    const markerLocation = this.props.markerLocation || [35.5853280815166, 53.39480996131898];
    var circle = L.circle(markerLocation, {
        color: 'blue',
        fillColor: '#1155af',
        fillOpacity: 0.5,
        radius: 25
    }).addTo(map);
    circle.bindPopup(this.props.popupText).openPopup();


    // a TileLayer is used as the "basemap"
    const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);

    // set our state to include the tile layer
    this.setState({ map, tileLayer });
  }

  render() {
    return (
      <div id="mapUI">
        <div ref={(node) => this._mapNode = node} id="map" />
      </div>
    );
  }
}

export default SimpleMap;