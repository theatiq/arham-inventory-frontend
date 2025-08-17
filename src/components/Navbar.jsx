// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav style={{ background: "#333", padding: "1rem" }}>
//       <Link to="/" style={{ color: "white", marginRight: "1rem" }}>
//         Home
//       </Link>
//       <Link to="/products" style={{ color: "white", marginRight: "1rem" }}>
//         Products
//       </Link>
//       <Link to="/about" style={{ color: "white" }}>
//         About
//       </Link>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/movements">Movements</Link>
      <Link to="/reports">Reports</Link>
    </nav>
  );
};

export default Navbar;
