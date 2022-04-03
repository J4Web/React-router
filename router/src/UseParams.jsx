import React, { Component } from 'react';
import { Routes, Route, useParams } from "react-router-dom";

function UseParams() {
    const {id} = useParams();
    return (
        <div>
            <h1>You Searched for... {id}</h1>
        </div>
    )
}

export default UseParams
