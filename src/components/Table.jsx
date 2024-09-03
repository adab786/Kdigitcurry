import React, { useState } from "react";
import tabledata from "../db/tabledata"; // Ensure the path is correct

function Table() {
  const [products, setProducts] = useState(tabledata.products); // State to manage products
  const [editId, setEditId] = useState(null); // Track which item is being edited
  const [formValues, setFormValues] = useState({}); // Track form input values

  const handleEditClick = (item) => {
    setEditId(item.id);
    setFormValues({
      name: item.name,
      material: item.details.material,
      unitLength: item.details.unitLength,
      shape: item.details.shape,
      price: item.price,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === editId
          ? {
              ...item,
              name: formValues.name,
              details: {
                material: formValues.material,
                unitLength: formValues.unitLength,
                shape: formValues.shape,
              },
              price: formValues.price,
            }
          : item
      )
    );
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const tableData = products.map((item) => (
    <tr key={item.id}>
      <td className="py-2 px-4 border-b border-gray-300">
        {editId === item.id ? (
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="border border-gray-300 p-1 rounded"
          />
        ) : (
          item.name
        )}
      </td>
      <td className="py-2 px-4 border-b border-gray-300">
        {editId === item.id ? (
          <>
            <button onClick={handleSave} className="text-green-500 px-2">
              Save
            </button>
            <button onClick={handleCancel} className="text-red-500 px-2">
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => handleEditClick(item)}
            className="text-blue-500"
          >
            Quick Edit
          </button>
        )}
      </td>
      <td className="py-2 px-4 border-b border-gray-300">
        {editId === item.id ? (
          <>
            <div>
              Material:{" "}
              <input
                type="text"
                name="material"
                value={formValues.material}
                onChange={handleChange}
                className="border border-gray-300 p-1 rounded"
              />
            </div>
            <div>
              Unit Length:{" "}
              <input
                type="text"
                name="unitLength"
                value={formValues.unitLength}
                onChange={handleChange}
                className="border border-gray-300 p-1 rounded"
              />
            </div>
            <div>
              Shape:{" "}
              <input
                type="text"
                name="shape"
                value={formValues.shape}
                onChange={handleChange}
                className="border border-gray-300 p-1 rounded"
              />
            </div>
          </>
        ) : (
          <>
            <div>Material: {item.details.material}</div>
            <div>Unit Length: {item.details.unitLength}</div>
            <div>Shape: {item.details.shape}</div>
          </>
        )}
      </td>
      <td className="py-2 px-4 border-b border-gray-300">
        {editId === item.id ? (
          <input
            type="text"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            className="border border-gray-300 p-1 rounded"
          />
        ) : (
          item.price
        )}
      </td>
    </tr>
  ));

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead className="bg-gray-200 border-b border-gray-300">
          <tr>
            <th className="py-2 px-4 text-left text-gray-600">Products</th>
            <th className="py-2 px-4 text-left text-gray-600">Action</th>
            <th className="py-2 px-4 text-left text-gray-600">
              Product Details
            </th>
            <th className="py-2 px-4 text-left text-gray-600">Price in Unit</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
}

export default Table;
