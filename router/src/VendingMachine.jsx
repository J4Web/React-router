import React, { Component } from 'react';
import './VendingMachine.css';
import { Routes, Route, Link,NavLink } from "react-router-dom";
import Message from './Message';
class VendingMachine extends Component {
    render() {
        return (
            <div className="vendingMachine">
            <Message>
                <h1>Hello Welcome! to the VendingMachine we serve food here.</h1>
            <nav>
            <NavLink to="/chips">Chips</NavLink>
            <NavLink to="/sardines">Sardines</NavLink>
            <NavLink to="/soda">Soda</NavLink>
            </nav>
            </Message>
            
            </div>
        );
    }
}

export default VendingMachine;