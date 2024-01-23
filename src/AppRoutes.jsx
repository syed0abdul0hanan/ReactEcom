import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Layout from "./components/Layout";
import Login from "./components/Login";
import ProductCard from "./Pages/ProductCard";
import Home from "./Pages/home";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
