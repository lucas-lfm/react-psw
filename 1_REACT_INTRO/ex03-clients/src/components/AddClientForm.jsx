import { useState } from "react";
import "./ClientForm.css";

const AddClientForm = ({ url, loading, handleCallFetch }) => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // inserir registro
  const handleSubmit = async (e) => {
    e.preventDefault();

    const client = {
      name,
      imgUrl,
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    };

    let fetchOptions = [url, config];
    const res = await fetch(...fetchOptions);
    const json = await res.json();

    setName("");
    setImgUrl("");

    handleCallFetch(json);
  };

  return (
    <div className="form-client">
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

        {!loading ? (
          <button type="submit" className="btn btn-action">
            Adicionar cliente
          </button>
        ) : (
          <button type="submit" className="btn btn-action" disabled>
            Aguarde...
          </button>
        )}
      </form>
    </div>
  );
};

export default AddClientForm;
