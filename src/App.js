import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyNav } from "./components/MyNav";
import { Products } from "./components/Products";
import { Home } from "./components/Home";
import { ProductDetails } from "./components/ProductDetails";
import { ProductForm } from "./components/ProductForm";
import { NotFoundPage } from "./components/NotFoundPage";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="products/:id/edit" element={<ProductForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
