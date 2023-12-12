import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProfilePicture from "../components/ProfilePicture";
import DetailClientForm from "../components/DetailClientForm";

// styles
import "./ClientDetail.css";

const ClientDetail = () => {
  const { id } = useParams();

  // URL para requisição de alteração (PUT) no servidor, especificando o ID do registro a ser alterado
  const url = `http://localhost:3000/clients/${id}`;

  const [editionMode, setEditionMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [callFetch, setCallFetch] = useState(false);

  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [originalImgUrl, setOriginalImgUrl] = useState("");

  // buscar dados
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setName(json.name);
        setImgUrl(json.imgUrl);
        setOriginalName(json.name);
        setOriginalImgUrl(json.imgUrl);
      } catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  const handleSubmit = async () => {
    const client = { id: id, name, imgUrl };

    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    };

    let fetchOptions = [url, config];
    const res = await fetch(...fetchOptions);
    const json = await res.json();

    setCallFetch(json);

    setEditionMode(false);
  };

  const handleCancel = () => {
    setEditionMode(false);
    setName(originalName);
    setImgUrl(originalImgUrl);
  };

  const handleName = (name) => {
    setName(name);
  };

  const handleImgUrl = (imgUrl) => {
    setImgUrl(imgUrl);
  };

  const handleEditionMode = (edition) => {
    setEditionMode(edition);
  };

  return (
    <div className="client-detail-container">
      <h1>Detalhes do Cliente</h1>
      <ProfilePicture imgUrl={imgUrl} displayName={false} />
      <DetailClientForm
        idClient={id}
        name={name}
        imgUrl={imgUrl}
        loading={loading}
        editionMode={editionMode}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        handleName={handleName}
        handleImgUrl={handleImgUrl}
        handleEditionMode={handleEditionMode}
      />
      {/* <img className="img-profile" src={imgUrl} alt={"Foto de perfil"} /> */}
    </div>
  );
};

export default ClientDetail;
