// import React, { useState } from "react";

// const Movements = () => {
//   const [form, setForm] = useState({
//     productId: "",
//     name: "",
//     price: "",
//     quantity: "",
//     company: "",
//     barcode: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:4000/api/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       alert(data.message || "Product added!");
//       setForm({
//         productId: "",
//         name: "",
//         price: "",
//         quantity: "",
//         company: "",
//         barcode: "",
//       });
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-6">📦 Add New Product</h1>

//       <form onSubmit={handleSubmit}>
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead className="bg-gray-800 text-white">
//               <tr>
//                 <th className="px-4 py-2">Product ID</th>
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">💰 Price</th>
//                 <th className="px-4 py-2">📦 Quantity</th>
//                 <th className="px-4 py-2">🏢 Company</th>
//                 <th className="px-4 py-2">🔖 Barcode</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="divide-x divide-gray-200">
//                 <td className="px-4 py-2">
//                   <input
//                     type="text"
//                     name="productId"
//                     value={form.productId}
//                     onChange={handleChange}
//                     className="w-full border px-2 py-1 rounded"
//                   />
//                 </td>
//                 <td className="px-4 py-2">
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     className="w-full border px-2 py-1 rounded"
//                   />
//                 </td>
//                 <td className="px-4 py-2">
//                   <input
//                     type="number"
//                     name="price"
//                     value={form.price}
//                     onChange={handleChange}
//                     className="w-full border px-2 py-1 rounded"
//                   />
//                 </td>
//                 <td className="px-4 py-2">
//                   <input
//                     type="number"
//                     name="quantity"
//                     value={form.quantity}
//                     onChange={handleChange}
//                     className="w-full border px-2 py-1 rounded"
//                   />
//                 </td>
//                 <td className="px-4 py-2">
//                   <input
//                     type="text"
//                     name="company"
//                     value={form.company}
//                     onChange={handleChange}
//                     className="w-full border px-2 py-1 rounded"
//                   />
//                 </td>
//                 <td className="px-4 py-2">
//                   <input
//                     type="text"
//                     name="barcode"
//                     value={form.barcode}
//                     onChange={handleChange}
//                     className="w-full border px-2 py-1 rounded"
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <button
//           type="submit"
//           className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//         >
//           ➕ Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Movements;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Movements = () => {
//   const [scannedData, setScannedData] = useState("");
//   const [formData, setFormData] = useState({
//     productId: "",
//     name: "",
//     price: "",
//     quantity: "",
//     company: "",
//     barcode: "",
//   });

//   // Auto-populate form after scanning
//   useEffect(() => {
//     if (scannedData) {
//       try {
//         const product = JSON.parse(scannedData);
//         setFormData(product);
//       } catch {
//         console.error("Invalid barcode format");
//       }
//     }
//   }, [scannedData]);

//   // Handle manual field changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Submit to backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/products", formData);
//       alert("Product saved!");
//       setFormData({
//         productId: "",
//         name: "",
//         price: "",
//         quantity: "",
//         company: "",
//         barcode: "",
//       });
//       setScannedData("");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Movements (Barcode Entry)</h1>

//       {/* Barcode Scanner Input */}
//       <input
//         type="text"
//         placeholder="Scan Barcode Here"
//         value={scannedData}
//         onChange={(e) => setScannedData(e.target.value)}
//         className="border p-2 w-full mb-4"
//       />

//       {/* Product Form */}
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <input
//           name="productId"
//           value={formData.productId}
//           onChange={handleChange}
//           placeholder="Product ID"
//           className="border p-2 w-full"
//         />
//         <input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Product Name"
//           className="border p-2 w-full"
//         />
//         <input
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="Price"
//           className="border p-2 w-full"
//         />
//         <input
//           name="quantity"
//           value={formData.quantity}
//           onChange={handleChange}
//           placeholder="Quantity"
//           className="border p-2 w-full"
//         />
//         <input
//           name="company"
//           value={formData.company}
//           onChange={handleChange}
//           placeholder="Company"
//           className="border p-2 w-full"
//         />
//         <input
//           name="barcode"
//           value={formData.barcode}
//           onChange={handleChange}
//           placeholder="Barcode Number"
//           className="border p-2 w-full"
//         />

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Save Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Movements;

// for mobile camera usage

// import React, { useState } from "react";
// import BarcodeScanner from "./BarcodeScanner";

// function Movements() {
//   const [formData, setFormData] = useState({
//     productId: "",
//     name: "",
//     price: "",
//     quantity: "",
//     company: "",
//     barcode: "",
//   });

//   const handleScan = (product) => {
//     setFormData({
//       productId: product.productId,
//       name: product.name,
//       price: product.price,
//       quantity: product.quantity,
//       company: product.company,
//       barcode: product.barcode,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch("http://localhost:4000/api/products", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     alert("✅ Product saved!");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">📦 Add Product via Barcode</h1>

//       <BarcodeScanner onScan={handleScan} />

//       <form onSubmit={handleSubmit} className="mt-4 space-y-3">
//         <input
//           className="border p-2 w-full"
//           value={formData.productId}
//           onChange={(e) =>
//             setFormData({ ...formData, productId: e.target.value })
//           }
//           placeholder="Product ID"
//         />
//         <input
//           className="border p-2 w-full"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           placeholder="Product Name"
//         />
//         <input
//           className="border p-2 w-full"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           placeholder="Price"
//         />
//         <input
//           className="border p-2 w-full"
//           value={formData.quantity}
//           onChange={(e) =>
//             setFormData({ ...formData, quantity: e.target.value })
//           }
//           placeholder="Quantity"
//         />
//         <input
//           className="border p-2 w-full"
//           value={formData.company}
//           onChange={(e) =>
//             setFormData({ ...formData, company: e.target.value })
//           }
//           placeholder="Company"
//         />
//         <input
//           className="border p-2 w-full"
//           value={formData.barcode}
//           onChange={(e) =>
//             setFormData({ ...formData, barcode: e.target.value })
//           }
//           placeholder="Barcode"
//         />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Movements;
import React, { useState } from "react";

function Movements() {
  const [formData, setFormData] = useState({
    productId: "",
    name: "",
    price: "",
    quantity: "",
    company: "",
    barcode: "",
  });

  const handleScan = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const product = JSON.parse(e.target.value); // assuming barcode encodes JSON
        setFormData(product);
      } catch {
        setFormData({ ...formData, barcode: e.target.value }); // fallback if just numeric barcode
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("✅ Product saved!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">📦 Add Product (USB Scanner)</h1>

      {/* Scanner Input */}
      <input
        type="text"
        onKeyDown={handleScan}
        placeholder="Scan barcode here"
        className="border p-2 w-full mb-4"
        autoFocus
      />

      {/* Form (auto-filled after scan) */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="border p-2 w-full" value={formData.productId} placeholder="Product ID" readOnly />
        <input className="border p-2 w-full" value={formData.name} placeholder="Name" readOnly />
        <input className="border p-2 w-full" value={formData.price} placeholder="Price" readOnly />
        <input className="border p-2 w-full" value={formData.quantity} placeholder="Quantity" readOnly />
        <input className="border p-2 w-full" value={formData.company} placeholder="Company" readOnly />
        <input className="border p-2 w-full" value={formData.barcode} placeholder="Barcode" readOnly />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}

export default Movements;
