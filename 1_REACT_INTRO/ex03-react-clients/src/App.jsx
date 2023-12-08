import { useEffect, useState } from "react";

// custom hooks
import { useHttpRequest } from "./hooks/useHttpRequest";

// styles
import "./App.css";

// components
import Card from "./components/Card";
import AddClientForm from "./components/AddClientForm";

const url = "http://localhost:3000/clients";

function App() {
  const [clients, setClients] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig, loading } = useHttpRequest(url);

  // 1 - resgatando dados dos clientes
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setClients(data);
  //   }

  //   fetchData();
  // }, []); // não tem nenhuma dependência

  return (
    <>
      <h1>Lista de Clientes</h1>
      <div className="main-content">
        <AddClientForm httpConfig={httpConfig} loading={loading} />
        <div className="container-card">
          {/* 6 - loading */}
          {loading && <p>Carregando dados...</p>}
          {!loading &&
            items &&
            items.map((client) => (
              <Card
                key={client.id}
                imgUrl={client.imgUrl}
                textAlt="Imagem de Perfil"
                name={client.name}
              />
            ))}
          {/* {items &&
          items.map((client) => (
            <Card
              key={client.id}
              imgUrl={client.imgUrl}
              textAlt="Imagem de Perfil"
              name={client.name}
            />
          ))} */}
        </div>
      </div>
    </>
  );
}

export default App;
