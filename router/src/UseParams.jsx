import React, { Component } from 'react';
import { Routes, Route, useParams } from "react-router-dom";
class UseParams extends Component {
    
    render() {
        const id=this.props;
        console.log(id);
        return (
            <div>
                <h1>hiiiiiiii </h1>
            </div>
        );
    }
}

export default UseParams;