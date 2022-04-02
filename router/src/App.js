import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <VendingMachine/>

    </BrowserRouter>
    </div>
  );
}

export default App;
