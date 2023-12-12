// react
import { Link } from "react-router-dom";

// styles
import "./ClientForm.css";

const DetailClientForm = ({
  idClient,
  name,
  imgUrl,
  loading,
  editionMode,
  handleCancel,
  handleSubmit,
  handleName,
  handleImgUrl,
  handleEditionMode,
}) => {
  return (
    <div className="form-client">
      <form>
        <label>
          <span>ID:</span>
          <input type="number" name="id" value={idClient} readOnly required />
        </label>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => handleName(e.target.value)}
            placeholder="Nome do cliente"
            required
            readOnly={!editionMode}
          />
        </label>
        <label>
          <span>Foto de perfil (URL):</span>
          <input
            type="url"
            name="imgUrl"
            value={imgUrl}
            onChange={(e) => handleImgUrl(e.target.value)}
            placeholder="URL da imagem"
            required
            readOnly={!editionMode}
          />
        </label>

        {/* loading no put */}

        {!editionMode ? (
          !loading ? (
            <button
              type="button"
              className="btn btn-action"
              onClick={() => handleEditionMode(true)}
            >
              Editar dados
            </button>
          ) : (
            <button type="button" className="btn btn-action" disabled>
              Aguarde...
            </button>
          )
        ) : (
          <button
            type="button"
            className="btn btn-action"
            onClick={handleSubmit}
          >
            Salvar
          </button>
        )}

        {editionMode ? (
          <button
            type="button"
            className="btn btn-cancel"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        ) : (
          <Link to="/" className="btn btn-link btn-cancel">
            Voltar
          </Link>
        )}
      </form>
    </div>
  );
};

export default DetailClientForm;
