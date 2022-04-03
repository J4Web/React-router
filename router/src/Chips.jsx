import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChipsImg from './Chips.png'
class Chips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bags:0,
            imgs:[]
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        let x= window.innerWidth* Math.random();
        let y= window.innerHeight* Math.random();
        this.setState(curState=>({
            bags:curState.bags+1,
            imgs: [...curState.imgs,{x,y}]
        }))
    }
    render() {
        return (
            <div>
            <span>Bage Eaten : {this.state.bags}</span><button onClick={this.handleClick}>Nom Nom Nom</button>
            {this.state.imgs.map((k,i)=>{
                return <img key={i} 
                style={{top:`${k.y}`,left:`${k.x}`}}
                className="bag"
                src={ChipsImg} alt="lays"/>
            })}
            <Link to="/">GO BACK</Link>

            </div>
        );
    }
}

export default Chips;