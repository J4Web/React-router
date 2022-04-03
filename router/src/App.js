import './App.css';
import VendingMachine from './VendingMachine';
import { Routes, Route, Link,NavLink } from "react-router-dom";
// import Chips from './Chips';
// import Soda from './Soda';
// import Sardines from './Sardines';
// import Navbar from './Navbar';
import UseParams from './UseParams';
function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
            <Routes>
            <Route path="/food/:id" element={ <UseParams/>} />
            </Routes>
    </div>
  );
}
export default App;
