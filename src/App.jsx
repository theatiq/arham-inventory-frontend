// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <main style={{ padding: "1rem" }}>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Movements from "./pages/Movements";
import Reports from "./pages/Reports";
import About from "./pages/About";
import BarcodeScanner from "./pages/BarcodeScanner";
import BarcodeGenerator from "./components/BarcodeGenerator";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/movements" element={<Movements />} />
          <Route path="/barGen" element={<BarcodeGenerator />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
