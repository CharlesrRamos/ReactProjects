import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";

import Logo from "../components/template/Logo";
import Main from "../components/template/Main";
import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";

export default (props) => (
  <div className="app">
    <Logo />
    <Nav />
    <Main icon="Home" title="Início" subtitle="Segundo projeto do capitulo de React" />
    <Footer />
  </div>
);
