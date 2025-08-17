// import products from "../data/products";
// import ProductCard from "../components/ProductCard";

// function Products() {
//   return (
//     <div>
//       <h1>Products</h1>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
//         {products.map((p) => (
//           <ProductCard key={p.id} product={p} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
// import React, { useEffect, useState } from "react";
// import { getProducts } from "../services/api";
// import ProductCard from "../components/ProductCard";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts().then((data) => setProducts(data));
//   }, []);

//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-4">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        📦 Product List
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">💰 Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">📦 Stock</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">📂 Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-100 transition">
                <td className="px-6 py-4 text-sm text-gray-700">{p.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{p.name}</td>
                <td className="px-6 py-4 text-sm text-green-600 font-semibold">${p.price}</td>
                <td className="px-6 py-4 text-sm">{p.stock}</td>
                <td className="px-6 py-4 text-sm">{p.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;

