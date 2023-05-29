import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Products() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3005/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  let deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3005/products/${id}`);
    // Remove the deleted product from the products array
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-5 text-center" style={{ backgroundColor: "#000010" }}>
      <div className="container">
        <h2 className="text-light mb-5">Our Products</h2>
        <NavLink
          to="/products/0/edit"
          className="btn btn-outline mb-5 bg-light"
        >
          Add New Product
        </NavLink>
        <Table className="text-light" bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>
                  <NavLink to={`/products/${item.id}`}>
                    <i className="fs-2 text-warning mx-2 bi bi-eye-fill"></i>
                  </NavLink>
                  <NavLink to={`/products/${item.id}/edit`}>
                    <i className="fs-2 text-info mx-2 bi bi-pencil-square"></i>
                  </NavLink>
                  <NavLink to={`/products`}>
                    <i
                      className="fs-2 text-danger mx-2 bi bi-trash3-fill"
                      onClick={() => deleteProduct(item.id)}
                    ></i>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
