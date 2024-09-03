import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../utils/ProjectAction"; // Ensure the path is correct

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    material: "",
    unitLength: "",
    shape: "",
    price: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    // Redirect or show a success message
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          required
          type="text"
          name="material"
          value={product.material}
          onChange={handleChange}
          placeholder="Material"
        />
        <input
          type="text"
          name="unitLength"
          value={product.unitLength}
          onChange={handleChange}
          placeholder="Unit Length"
        />
        <input
          type="text"
          name="shape"
          value={product.shape}
          onChange={handleChange}
          placeholder="Shape"
        />
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
