import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ProdServ.css";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch CSV from the backend
        const response = await axios.get("http://localhost:5000/products.csv");

        // Parse CSV data manually
        const lines = response.data.split("\n"); // Split the CSV data by lines
        const headers = lines[0].split(","); // First line as headers
        const productData = lines.slice(1).map((line) => {
          const values = line.split(","); // Split each line by comma
          let product = {};
          headers.forEach((header, index) => {
            product[header] = values[index]?.trim(); // Create an object for each product
          });
          return product;
        });

        setProducts(productData.filter((product) => product.id)); // Filter out empty rows
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-listing-container">
      <h3>Available Products</h3>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
                <button className="buy-now-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListing;





