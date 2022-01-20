import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blank from "./pages/Blank";
import "./scss/App.scss";
import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import Dashboard from "./pages/Dashboard.jsx";
import MainLayout from "./layout/MainLayout";
import Order from "./pages/Order";
import Products from "./pages/Products";
import CusTomer from "./pages/Customer";

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Order />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<CusTomer />} />
          <Route path="settings" element={<Blank />} />
          <Route path="stats" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  
  );
}

export default App;
