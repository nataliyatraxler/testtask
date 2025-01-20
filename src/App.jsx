import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Details from "./pages/Details/Details";

const App = () => {
  const [campers, setCampers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers");
      const data = await response.json();
      setCampers(data.items || []);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog campers={campers} />} />
        <Route path="/details/:id" element={<Details campers={campers} />} />
      </Routes>
    </Router>
  );
};

export default App;
