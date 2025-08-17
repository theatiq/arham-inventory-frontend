// import React from "react";

// const Movements = () => {
//   return <h1 className="text-xl font-bold">Movements Page</h1>;
// };

// export default Movements;
import React, { useState } from "react";

const Movements = () => {
  const [form, setForm] = useState({
    productId: "",
    name: "",
    price: "",
    quantity: "",
    company: "",
    barcode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert(data.message || "Product added!");
      setForm({
        productId: "",
        name: "",
        price: "",
        quantity: "",
        company: "",
        barcode: "",
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">📦 Add New Product</h1>

      <form onSubmit={handleSubmit}>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2">Product ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">💰 Price</th>
                <th className="px-4 py-2">📦 Quantity</th>
                <th className="px-4 py-2">🏢 Company</th>
                <th className="px-4 py-2">🔖 Barcode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-2">
                  <input
                    type="text"
                    name="productId"
                    value={form.productId}
                    onChange={handleChange}
                    className="w-full border px-2 py-1 rounded"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border px-2 py-1 rounded"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full border px-2 py-1 rounded"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className="w-full border px-2 py-1 rounded"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full border px-2 py-1 rounded"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    name="barcode"
                    value={form.barcode}
                    onChange={handleChange}
                    className="w-full border px-2 py-1 rounded"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          ➕ Add Product
        </button>
      </form>
    </div>
  );
};

export default Movements;
