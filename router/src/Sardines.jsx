import React, { Component } from 'react';
import { Routes, Route, Link,NavLink } from "react-router-dom";
import Message from './Message';
class Sardines extends Component {
    render() {
        return (
            <div className="container-sadines">
            <img className="sardines" src={'https://i.gifer.com/9IeW.gif'} alt="sardines"/> 
<Message>
    <Link to="/">GO BACK</Link>
</Message>            
            </div>
        );
    }
}

export default Sardines;