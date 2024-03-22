import React from "react";

import products from "../data/data";

const ProductPage = () => {
    return (
      <div>
        <h1>Products</h1>
        <div className="grid grid-cols-3 gap-4"> {/* Example Tailwind CSS classes */}
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.imageURL} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductPage;