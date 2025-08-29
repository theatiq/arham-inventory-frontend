// import React, { useEffect, useRef } from "react";
// import JsBarcode from "jsbarcode";

// const BarcodeGenerator = ({ product }) => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     // Encode all product info as JSON string
//     const productData = JSON.stringify(product);
//     JsBarcode(svgRef.current, productData, {
//       format: "CODE128",
//       lineColor: "#000",
//       width: 2,
//       height: 60,
//       displayValue: false,
//     });
//   }, [product]);

//   return <svg ref={svgRef}></svg>;
// };

// export default BarcodeGenerator;

{
  /* <BarcodeGenerator
  product={{
    productId: "1",
    name: "Coffee",
    price: "100",
    quantity: "10",
    company: "AMA",
    barcode: "123456789",
  }}
/> */
}

// import React, { useState } from "react";
// import Barcode from "react-barcode";

// function BarcodeGenerator() {
//   const [product, setProduct] = useState({
//     Id: "15",
//     // name: "Coffee",
//     // price: "100",
//     // quantity: "10",
//     // company: "AMA",
//   });

//   // create a barcode string (you can concatenate fields or use unique ID)
//   const barcodeData = JSON.stringify(product);
//   console.log(setProduct)

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Generate Product Barcode</h2>

//       <div className="space-y-2">
//         <p>📦 {product.name}</p>
//         <p>💰 {product.price}</p>
//         <p>🏭 {product.company}</p>
//         <p>🔢 Qty: {product.quantity}</p>
//       </div>

//       <div className="mt-4">
//         <Barcode value={barcodeData} />
//       </div>
//     </div>
//   );
// }

// export default BarcodeGenerator;

import React, { useState } from "react";
import Barcode from "react-barcode";

function BarcodeGenerator() {
  const [product, setProduct] = useState({
    Id: "PRAN-15",
    name: "Coffee",
    price: "100",
    quantity: "10",
    company: "AMA",
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Generate Product Barcode</h2>

      <div className="space-y-2">
        <p>📦 {product.name}</p>
        <p>💰 {product.price}</p>
        <p>🏭 {product.company}</p>
        <p>🔢 Qty: {product.quantity}</p>
      </div>

      <div className="mt-4">
        {/* Only product ID as barcode value */}
        <Barcode value={product.Id} />
      </div>
    </div>
  );
}

export default BarcodeGenerator;
