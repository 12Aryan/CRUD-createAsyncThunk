import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUserList, getUsers } from "../../../redux/usersSlice";
import Modal from "../../../../../shared/Modal/Modal";
import DeleteModal from "../../../../../shared/Delete-Modal/DeleteModal";

const Users = () => {
  const { users, loading, error } = useSelector(getUserList);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    age: "", 
    gender: "",
  });

  const [deleteUserData, setDeleteUserData] = useState({
    userId: null,
    userName: null,
  });


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const handleDeleteClick = (userName, userId) => {
    setIsDeleteModalOpen(true);
    setDeleteUserData({ userName, userId });
  };
  const handleUserDelete = () => {
    dispatch(deleteUser(deleteUserData.userId));
    setIsDeleteModalOpen(false);
  };

  const handleEditClick = (
    userId,
    userName,
    userEmail,
    userGender,
    userAge
  ) => {
    setIsOpen(true),
      setUserDetail((prevState) => ({
        ...prevState,
        id: userId,
        name: userName,
        email: userEmail,
        gender: userGender,
        age: userAge,
      }));
  };
  return (
    <>
      {isOpen && (
        <Modal setIsOpenProp={setIsOpen} userDetailProp={userDetail} />
      )}
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
                  className="card bg-black col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 px-0 "
                >
                  <div className="card-body bg-dark  m-2 rounded">
                    <h6 className="card-title">{user.name}</h6>
                    <h6 className="card-title">{user.email}</h6>
                    <h6 className="card-title">Age: {user.age}</h6>
                    <h6 className="card-title">{user.gender}</h6>

                    <div className="d-flex my-3 gap-2">
                      <button
                        className="btn btn-outline-primary"
                        onClick={() =>
                          handleEditClick(
                            user.id,
                            user.name,
                            user.email,
                            user.gender,
                            user.age
                          )
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDeleteClick(user.name, user.id)}
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
