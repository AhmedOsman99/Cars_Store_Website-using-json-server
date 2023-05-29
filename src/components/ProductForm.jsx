import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export function ProductForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  let [formValues, setFormValues] = useState({
    productName: "",
    price: "",
    quantity: "",
  });

  let operationHandler = (event) =>
    setFormValues({ ...formValues, [event.target.name]: event.target.value });

  let addNewproduct = (event) => {
    event.preventDefault();
    if (id == 0) {
      axios
        .post("http://localhost:3005/products", formValues)
        .then((response) => {
          navigate("/products");
        });
    } else {
      axios.put(`http://localhost:3005/products/${id}`, formValues).then(() => {
        navigate("/products");
      });
    }
  };

  let [product, setProduct] = useState({});

  let getProduct = async () => {
    let response = await axios.get(`http://localhost:3005/products/${id}`);
    setProduct(response.data);
    setFormValues(response.data);
  };



  useEffect(() => {
    if (id != 0) {
      getProduct();
    }
  }, []);

  return (
    <div className="container mt-5 p-5 bg-dark text-light">
      <Form onSubmit={addNewproduct}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            onChange={operationHandler}
            name="productName"
            type="text"
            placeholder="Enter Product Name"
            defaultValue={product.productName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={operationHandler}
            name="price"
            type="text"
            placeholder="Enter Product Price"
            defaultValue={product.price}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            onChange={operationHandler}
            name="quantity"
            type="text"
            placeholder="Enter quantity"
            defaultValue={product.quantity}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4">
          {id == 0 ? "Add Product" : "Edit Product"}
        </Button>
      </Form>
    </div>
  );
}
