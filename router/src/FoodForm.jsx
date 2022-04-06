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
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {
      alert('Button clicked and seached', this.state.query);
      this.props.router.navigate(`/food/${this.state.query}`)
    }
    handleChange(evt){
        this.setState({query:evt.target.value});
    }
  render() {
    return (
      <div><h1>Search Your food here...</h1>
      <input type="text" value={this.state.query} onChange={this.handleChange} />
      <NavLink to={`/food/${this.state.query}`}>Go!</NavLink>
      <button onClick={this.handleClick} >heree</button>
      </div>
    )
  }
}

export default WithRouter(FoodForm);