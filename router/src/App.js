import './App.css';
import VendingMachine from './VendingMachine';
import { Routes, Route, Link,NavLink } from "react-router-dom";
import DogDetail from './DogDetails';
// import Chips from './Chips';
// import Soda from './Soda';
// import Sardines from './Sardines';
import UseParams from './UseParams';
import FoodForm from './FoodForm';
import withRouter from './WithRouter';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Navbar';
import Tubby from './imgs/tubby.jpg'
import Hazel from './imgs/hazel.jpg'
import Whiskey from './imgs/whiskey.jpg'
import React, { Component } from 'react';
import Dogs from './Dogs';
function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

function Error() {
  return (
    <div>
      <h1>ITS 404 TIME YEAHHHH BOIIIII</h1>
    </div>
  )
  }
 class App extends Component {
  static defaultProps = {
    dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: Whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: Hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: Tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
  }
  render() {

    return (
          <div className="App">
    {/* <Navbar/> */}
    {/* <h1>{}</h1> */}
            <Routes>
            <Route path="/" element={<FoodForm/>} />
            <Route path="/dogs" element={<Dogs info={this.props.dogs}  />} />
            <Route path="/food/:id" element={<UseParams/>} />
            <Route path="/dogs/:id" element={<DogDetail detail={this.props.dogs}/>} />
            <Route path="*" element={<Error/>}/>
            </Routes>
    </div>
    )
  }
}

export default App