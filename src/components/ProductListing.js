// /src/components/ProductListing.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ProdServ.css";

function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h3>Available Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListing;
