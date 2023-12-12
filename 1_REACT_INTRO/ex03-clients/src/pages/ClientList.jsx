// react
import { useState, useEffect } from "react";

// components
import Card from "../components/Card";
import AddClientForm from "../components/AddClientForm";

// styles
import "./ClientList.css";

const url = "http://localhost:3000/clients";

const ClientList = () => {
  const [clients, setClients] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // buscar dados
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setClients(json);
      } catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  const handleCallFetch = (json) => {
    setCallFetch(json);
  };

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <div className="main-content">
        <div className="container-card">
          {loading && <p>Carregando dados...</p>}
          {error && <p>{error}</p>}
          {!error &&
            clients &&
            clients.map((client) => (
              <Card
                key={client.id}
                imgUrl={client.imgUrl}
                name={client.name}
                idClient={client.id}
                urlBase={url}
                handleCallFetch={handleCallFetch}
              />
            ))}
        </div>
        <AddClientForm
          url={url}
          loading={loading}
          handleCallFetch={handleCallFetch}
        />
      </div>
    </div>
  );
};

export default ClientList;
