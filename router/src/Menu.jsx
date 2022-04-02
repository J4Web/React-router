import React, { Component } from 'react';
import { Route,Routes,NavLink} from 'react-router-dom';
import './Menu.css'
import Soda from './Soda.jsx';
import Chips from './Chips.jsx';
import Sardines from './Sardines.jsx';
// import VendingMachine from './VendingMachine.jsx';
import Start from './Start.jsx';
class Menu extends Component {
    render() {
        return (
            <div>
            {/* // <div className="container">
            // <div className="content">
            // <span className="left"><h1>Hello I am a vendingMachine What would you like to eat?</h1></span>
            // <span className="links"> */}
                    {/* <Route path='/' element={}/> */}
                    <Start/>


    {/* // </span>
    //         </div> */}
                
    </div>
        );
    }
}

export default Menu;