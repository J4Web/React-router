import React, { Component } from 'react';
import FoodForm from './FoodForm';
import { Routes, Route, useParams, Redirect } from "react-router-dom";

function UseParams() {
    const {id} = useParams();
    const link=`https://source.unsplash.com/1600x900/?${id}`;
    return (
        <div>
        {/\d/.test(id)? <Redirect to="/" />:
            (<div>
            <h1>You Searched for... {id}</h1>
            <img src={link} alt={id}/>
</div>)}
        </div>
    )
}

export default UseParams
