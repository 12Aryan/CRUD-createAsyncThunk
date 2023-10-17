import "./DeleteModal.css";
const DeleteModal = ({ setIsDeleteModalOpenProp, handleDeleteProp, deleteUserDataProp }) => {
  return (
    <div className="modal-parent-container">
      <div className="modal-child-container bg-dark">
        <div className="child-modal-header">
          {" "}
          <span
            className="close"
            onClick={() => setIsDeleteModalOpenProp(false)}
          >
            &times;
          </span>
        </div>
        <div className="child-modal-body">
         { `Are you sure you want to delete "${deleteUserDataProp.userName}"`}
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-outline-primary"
            onClick={handleDeleteProp}
          >
            Yes
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => setIsDeleteModalOpenProp(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
