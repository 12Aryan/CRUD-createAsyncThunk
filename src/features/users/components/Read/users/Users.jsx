import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUserList, getUsers } from "../../../redux/usersSlice";
import Modal from "../../../../../shared/Modal/Modal";
import DeleteModal from "../../../../../shared/Delete-Modal/DeleteModal";

const Users = () => {
  const { users, loading, error } = useSelector(getUserList);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const [deleteUserData, setDeleteUserData] = useState({
    userId: null,
    userName: null,
  });

  //   console.log("loading--", loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const openDeleteModal = (userName, userId) => {
    setIsDeleteModalOpen(true);
    setDeleteUserData({ userName, userId });
  };
  const handleUserDelete = () => {
    dispatch(deleteUser(deleteUserData.userId));
    setIsDeleteModalOpen(false);
  };
  return (
    <>
      {isOpen && <Modal setIsOpenProp={setIsOpen} />}
      {isDeleteModalOpen && (
        <DeleteModal
          setIsDeleteModalOpenProp={setIsDeleteModalOpen}
          handleDeleteProp={handleUserDelete}
          deleteUserDataProp={deleteUserData}
        />
      )}
      <div className="">
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center custom-90vh"
            style={{ color: "rgb(194, 193, 193)" }}
          >
            <h1>Loading....</h1>
          </div>
        ) : error != null ? (
          <h1>{"error"}</h1>
        ) : (
          <div className="row px-4 py-5 content-wrapper">
            {users && users.length > 0 ? (
              users.map((user, index) => (
                <div
                  key={index}
                  className="card bg-black col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 px-0"
                >
                  <div className="card-body bg-dark  m-2">
                    <h6 className="card-title">{user.name}</h6>
                    <h6 className="card-title">{user.email}</h6>
                    <h6 className="card-title">{user.gender}</h6>
                    <div className="d-flex my-3 gap-2">
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => setIsOpen(true)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => openDeleteModal(user.name, user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="d-flex justify-content-center ">
                <h1>No data found</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Users;
