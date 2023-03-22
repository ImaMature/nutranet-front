import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

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
      <Home data={data} />
      <Footer />
    </div>
  );
}

export default App;
