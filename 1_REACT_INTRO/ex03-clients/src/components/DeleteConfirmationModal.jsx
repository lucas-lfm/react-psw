import "./DeleteConfirmationModal.css";

const DeleteConfirmation = ({ hiddenModal, handleDelete }) => {
  return (
    <div className="modal-delete-confirmation">
      <div className="modal-content">
        <p>Confirmar exclusão?</p>
        <button className="btn btn-cancel" type="button" onClick={hiddenModal}>
          Cancelar
        </button>
        <button className="btn btn-delete" type="button" onClick={handleDelete}>
          Sim, Excluir
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
