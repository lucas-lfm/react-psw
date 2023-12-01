import "./App.css";

// Componentes
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    {
      brand: "Hyundai",
      model: "HB20",
      km: "65.000",
      category: "Hatch",
      year: "2018",
      price: "55.000,00",
    },
    {
      brand: "Toyota",
      model: "Hilux",
      km: "100.000",
      category: "Picape",
      year: "2019",
      price: "155.000,00",
    },
    {
      brand: "Volkswagen",
      model: "T-Cross",
      km: "20.000",
      category: "SUV",
      year: "2021",
      price: "135.000,00",
    },
  ];

  return (
    <>
      <h1>Anúncios Recentes</h1>
      <div className="cards">
        {cars.map((car) => (
          <CarDetails
            brand={car.brand}
            model={car.model}
            km={car.km}
            category={car.category}
            year={car.year}
            price={car.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
