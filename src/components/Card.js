import React, { Component } from "react";
// import "../styles/Card.css";

export default class Card extends Component {
    render(){
        return(
            <div className = "card" id = { this.props.id } clicked = { this.props.clicked }  
            onClick = { () => this.props.checkClicked(this.props.id) }>
                <img className = "cardImage" src = { this.props.src} alt = { this.props.alt }/>
            </div>
        );
    }
}