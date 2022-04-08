import React from 'react';
import { useParams, Navigate, useNavigate } from "react-router-dom";


function UseParams() {
    console.log(useParams());
    const {id} = useParams();
    const link=`https://source.unsplash.com/1600x900/?${id}`;
    return (
        <div>
        {/\d/.test(id)? <Navigate to="/" replace={true} />:
            (<div>
            <h1>You Searched for... {id}</h1>
            <img src={link} alt={id}/>
            
</div>)}
        </div>
    )
}

export default UseParams
