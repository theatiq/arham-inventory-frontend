// function ProductCard({ product }) {
//   return (
//     <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price}</p>
//       <p>Stock: {product.stock}</p>
//     </div>
//   );
// }


import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

const ProductCard = ({ product }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, product.id, { format: "CODE128" });
    }
  }, [product.id]);

  return (
    <div className="border p-2 rounded">
      <h2 className="font-bold">{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Company: {product.company}</p>
      <svg ref={barcodeRef}></svg>
    </div>
  );
};

export default ProductCard;

