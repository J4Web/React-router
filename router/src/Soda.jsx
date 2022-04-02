import React, { Component } from 'react';
import SodaImg from './Soda.png'
import './Soda.css'
class Soda extends Component {
    render() {
        return (
            <div className="soda-container">
                <img  className="soda" src={SodaImg} alt={Soda}/>
                <h4>Soda was my favorite Drink but now i drink sparking water.</h4>
                <p> Altho i miss soda tho! </p>
                <img className="soda" src={SodaImg} alt={Soda}/>
            </div>
        );
    }
}

export default Soda;