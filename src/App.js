import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import { Toaster } from 'react-hot-toast';
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AllRoutes />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
