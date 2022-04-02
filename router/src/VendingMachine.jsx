import React, { Component } from 'react';
import './VendingMachine.css';
import Menu from './Menu.jsx';
class VendingMachine extends Component {
    render() {
        return (
            <div className="vendingMachine">
            <Menu/>
            </div>
        );
    }
}

export default VendingMachine;