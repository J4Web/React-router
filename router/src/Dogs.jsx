import React, { Component } from 'react';
import './App.css'
import WithRouter from './WithRouter';

class Dogs extends Component {
    handleClick(name) {
        this.props.router.navigate(`/dogs/${name}`)

    }
    render() {
        return (
            <div className="DogList">
            <h1 className="display-1 text-center">
            Dog List
            </h1>
            <div className="row">
            {this.props.info.map(info=>{
                return <div className="col-lg-4 text-center" key={info.name}>
                <h3>{info.name}</h3>
                <img className="dog" src={info.src} alt={info.name}/>
                <p>
                <button className="btn btn-info" onClick={this.handleClick.bind(this,info.name)}>Details</button>
                </p>
                </div>
                })}
                </div>
            </div>
        );
    }
}

export default WithRouter(Dogs);