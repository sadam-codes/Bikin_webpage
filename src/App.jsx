import React from "react";
import Navbar from "./Generic_Components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <About/>
    </div>
  );
};

export default App;
