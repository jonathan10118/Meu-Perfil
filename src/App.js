import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MeuPerfil from "./components/MeuPerfil";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
return(
   <div clasname="font-sans">
    <NavBar />
    <Home />
    <MeuPerfil />
    <Footer/>
  </div>
  );
}