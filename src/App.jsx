import Nav from "./components/Nav";
import Table from "./components/Table";
import AddProduct from "./components/Addproducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProgressBar from "./components/Progress";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/progress" element={<ProgressBar />} />
      </Routes>
    </Router>
  );
}

export default App;
