import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/signup";
import Home from "./components/home";
import Product from "./components/product";
import StockReport from "./components/report";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/stock" element={<StockReport/>}/>
      </Routes>
    </div>
  );
}

export default App;
