import React from "react";
import Navbar from "./Generic_Components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Feature from "./components/Feature";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <About/>
      <Feature/>
    </div>
  );
};

export default App;
