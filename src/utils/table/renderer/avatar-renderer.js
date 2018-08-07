import React from "react";
import './avatar-renderer.css';


export default class AvatarRenderer extends React.Component {

    render() {
        return <img className="avatar" src={this.props.value} alt="Avatar" />;
    }
}