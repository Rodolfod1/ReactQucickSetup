
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import Layout from './components/Layout';
import Catalog from './pages/products';


import Login from './pages/login';
import Supply from './pages/supply';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route>
        <Route path="Home" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="products" element={<Catalog/>}/>
          <Route path="supply" element={<Supply/>}/>

          <Route path="Admin" element={<Admin/>}/>
          
        </Route>


        
      </Routes>
   
   
      
    </div>
  );
}

export default App;
