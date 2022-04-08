import React, { Component } from 'react';
import  WithRouter from './WithRouter';
import './DogsDetails.css';
import Tubby from './imgs/tubby.jpg';
import Whiskey from './imgs/whiskey.jpg';
import Hazel from './imgs/hazel.jpg';
import {NavLink,Link} from './navreact-router-dom';
class DogDetails extends Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch() {
        const {id}=this.props.router.params;
        const details=this.props.detail.find(dogs=>
            dogs.name.toLowerCase() === id.toLowerCase());
            return details;
    }
    
    render() {
            const details=this.handleSearch();
        return (
            <div className="container">

            
            <div className ="DogDetails row justify-content-center mt-5">
            <div className="col-11 col-lg-5">
            <div className="DogDetails-cardcard">
            <img src={details.src} alt={details.name} key={details.name}/>
            <div className="card-body">
            <h2 className="card-title">{details.name}</h2>
            <h4 className="card-subtitle text-muted">{details.age} years Old.</h4>

            </div>
            <div>
            <ul className="list-group list-group-flush">
            {details.facts.map((p,i)=>{
                return <li className="list-group-item" key={i}>{p}</li> 
            })}

            </ul>
            <div className="card-body">
            <Link className="btn btn-info" to='/dogs'>Go BACK</Link>
            </div>
            </div>

            </div>
            </div>

            </div>
            </div>
        );
    }
}

export default WithRouter(DogDetails);