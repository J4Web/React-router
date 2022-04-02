import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter } from "react-router-dom";
import Chips from "./Chips";
import Sardines from './Sardines';
import Soda from './Soda';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <VendingMachine/>
      <Chips/>
      <Soda/>
      <Sardines/>
    </BrowserRouter>
    </div>
  );
}

export default App;
