import { useState } from "react";
import "./AddClientForm.css";
import { useHttpRequest } from "../hooks/useHttpRequest";

const AddClientForm = ({ httpConfig, loading }) => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // 2 - Adição de clientes
  const handleSubmit = async (e) => {
    e.preventDefault();
    const client = {
      name,
      imgUrl,
    };

    // console.log(client);

    // const res = await fetch(urlPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(client),
    // });

    // // 3 - carregamento dinâmico
    // const addedClient = await res.json();
    // setList((previousClients) => [...previousClients, addedClient]);

    httpConfig(client, "POST");

    setName("");
    setImgUrl("");
  };

  return (
    <div className="add-client">
      <h2>Adicione um novo cliente</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do cliente"
            required
          />
        </label>
        <label>
          <span>Foto de perfil (URL):</span>
          <input
            type="url"
            name="imgUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            placeholder="URL da imagem"
            required
          />
        </label>

        {/* 7 - loading no post */}
        {!loading ? (
          <button type="submit">Adicionar cliente</button>
        ) : (
          <button type="submit" disabled>
            Aguarde
          </button>
        )}
        {/* <button type="submit">Adicionar cliente</button> */}
      </form>
    </div>
  );
};

export default AddClientForm;
