import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Search from "./components/Search/Search";
import Preview from "./components/Preview/Preview";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <Search /> 
        <Map />
        <Preview />
        <Form />
      </main>
    </>
  );
}

export default App;
