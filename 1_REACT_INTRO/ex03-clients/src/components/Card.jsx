import { Link } from "react-router-dom";
import "./Card.css";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useState } from "react";
import ProfilePicture from "./ProfilePicture";

const Card = ({ imgUrl, name, idClient, urlBase, handleCallFetch }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const displayModal = () => {
    setIsModalVisible(true);
  };

  const hiddenModal = () => {
    setIsModalVisible(false);
  };

  // excluindo registro
  const handleDelete = async () => {
    // montando a API para requisição DELETE concatenando o ID do cliente
    const url = `${urlBase}/${idClient}`;

    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let fetchOptions = [url, config];
    const res = await fetch(...fetchOptions);
    const json = await res.json();

    handleCallFetch(json);
  };

  return (
    <div className="card">
      <ProfilePicture imgUrl={imgUrl} name={name} displayName={true} />
      <Link to={`/clients/${idClient}`} className="btn-link">
        <button className="btn btn-profile">Ver perfil</button>
      </Link>
      <button onClick={displayModal} className="btn btn-delete">
        Deletar cliente
      </button>

      {isModalVisible && (
        <DeleteConfirmationModal
          hiddenModal={hiddenModal}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Card;
