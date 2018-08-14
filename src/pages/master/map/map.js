import React, { Component } from 'react';
// import Button from "@material-ui/core/Button";
import SimpleMap from './simple-map';
import './map.css';


export default class MapPage extends Component {

    constructor(props) {
        super(props);
        this.map = this.map.bind(this);
    }

    map(ev) {
        alert(ev);
    }

    render() {
        let center = [35.5853280815166, 53.39480996131898];
        let popupText = "<b>Hello Aroin!</b><br>I am a popup.";
        let markerLocation = [35.5853280815166, 53.39480996131898];
        return (
            <SimpleMap center={center} popupText={popupText} markerLocation={markerLocation} mapClick={this.map} />
        )
    }
}

