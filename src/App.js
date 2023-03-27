import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "bulma/css/bulma.css";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Home data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
