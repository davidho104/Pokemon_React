import React, { Component } from "react";
// import "../styles/navbar.css";

export default class navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <a href="/"> Pokemon React </a>
                </div>
                <div className="nav navbar-nav navbar-right">
                    Current Score: { this.props.score} | High Score: { this.props.highScore }
                </div>
            </nav>
        )
    }
}