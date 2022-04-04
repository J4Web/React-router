import React, { Component } from 'react';
import { Routes, Route, useParams } from "react-router-dom";

function UseParams() {
    const {id} = useParams();
    const link=`https://source.unsplash.com/1600x900/?${id}`;
    return (
        <div>
            <h1>You Searched for... {id}</h1>
            <img src={link} alt={id}/>
        </div>
    )
}

export default UseParams
