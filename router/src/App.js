import './App.css';
import VendingMachine from './VendingMachine';
import { Routes, Route, Link,NavLink } from "react-router-dom";
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
    <Navbar/>
             <Routes>
                <Route path="/" element={<VendingMachine/>}/>
                <Route path="/chips" element={<Chips/>}/>
                <Route path="/sardines" element={<Sardines/>}/>
                <Route path="/soda" element={<Soda/>}/>
            </Routes>
    </div>
  );
}
export default App;
