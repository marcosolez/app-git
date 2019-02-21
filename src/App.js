import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuLateral from "./components/menuLateral";
import Menu from "./components/menu";
import PieDePagina from "./components/piePagina";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuLateral />
        <Menu />
        <PieDePagina />
      </div>
    );
  }
}

export default App;
