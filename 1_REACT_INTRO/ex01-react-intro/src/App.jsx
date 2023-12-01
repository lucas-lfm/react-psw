import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import CarDetails from "./components/CarDetails";

function App() {
  const car1 = {
    model: "HB20",
    brand: "Hyundai",
    color: "Bronze Terra",
    price: 45000,
    year: 2018,
    discount: 5,
  };

  const car2 = {
    model: "Corola",
    brand: "Toyota",
    color: "Prata",
    price: 150000,
    year: 2020,
    discount: 10,
  };

  return (
    <>
      <h1>Hello World!</h1>
      <p className="paragrafo">
        Este é o componente principal da minha aplicação.
      </p>
      <FirstComponent />
      <button type="button">Clique aqui!</button>
      <FirstComponent />
      {/* Trabalhando com dados dinâmicos (props) */}
      <CarDetails car={car1} />
      <CarDetails car={car2} />
    </>
  );
}

export default App;
