import './App.css';
import VendingMachine from './VendingMachine';
import { Routes, Route, Link,NavLink } from "react-router-dom";
// import Chips from './Chips';
// import Soda from './Soda';
// import Sardines from './Sardines';
import UseParams from './UseParams';
// import Navbar from './Navbar';

function Home() {
  return (
    <div><h1>This is for Home Page</h1></div>
  )
}


function Error() {
  return (
    <div>
      <h1>ITS 404 TIME YEAHHHH BOIIIII</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/food/:id" element={<UseParams/>} />
            <Route path="*" element={<Error/>}/>
            </Routes>
    </div>
  );
}
export default App;
