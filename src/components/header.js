import React, { Component } from "react";
// import "../styles/navbar.css";

export default class Header extends Component {
    render(){
        return (
            <header className="header">
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <h1 className=""> Don't click on an image more than once!</h1>
                </div>
            </nav>
            </header>
        )
    }
}