import React, { Component } from "react";
// import "../styles/Main.css";

export default class Main extends Component {
    render(){
        return (
            <div className = "cardImage">
                { this.props.children }
            </div>
        );
    }
}