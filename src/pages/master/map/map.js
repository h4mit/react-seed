import React, { Component } from 'react';
// import Button from "@material-ui/core/Button";
import SimpleMap from './simple-map';
import './map.css';


export default class MapPage extends Component {

    constructor(props) {
        super(props);
        this.handleMapClick = this.handleMapClick.bind(this);
    }

    handleMapClick(param) {
        alert(param);
    }

    render() {
        let center = [35.5853280815166, 53.39480996131898];
        let popupText = "<b>Hello Aroin!</b><br>I am a popup.";
        let markerLocation = [35.5853280815166, 53.39480996131898];
        let handleMapClick = this.handleMapClick;
        return (
            <SimpleMap center={center} popupText={popupText} markerLocation={markerLocation} mapClick={handleMapClick} />
        )
    }
}

