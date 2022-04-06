import React, { Component } from 'react'
import { NavLink} from 'react-router-dom';
import WithRouter from './WithRouter';
class FoodForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query:""
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(evt){
        this.setState({query:evt.target.value});
    }
  render() {
    return (
      <div><h1>Search Your food here...</h1>
      <input type="text" value={this.state.query} onChange={this.handleChange} />
      <NavLink to={`/food/${this.state.query}`}>Go!</NavLink>
      <button>heree</button>
      </div>
    )
  }
}

export default WithRouter(FoodForm);