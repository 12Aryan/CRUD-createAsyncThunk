import { useState } from "react";
import InputComponent from "../Input/InputComponent";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/users/redux/usersSlice";
const Modal = ({ setIsOpenProp, userDetailProp }) => {
  // console.log("userDetail--", userDetailProp);
  const dispatch = useDispatch();
  const [editUserDetail, setEditUserDetail] = useState({
    name: userDetailProp.name,
    email: userDetailProp.email,
    age: userDetailProp.age,
    gender: userDetailProp.gender,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(editUserDetail));
  };
  const editUserData = (e) => {
    console.log("namme--", e.target.name);
    // console.log(e.target.value);
    setEditUserDetail((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(editUserDetail);
  return (
    <div className="modal-parent-container">
      <div className="modal-child-container bg-dark">
        <div className="child-modal-header">
          {" "}
          <span className="close" onClick={() => setIsOpenProp(false)}>
            &times;
          </span>
        </div>
        <div className="child-modal-body">
          <div className="">
            <form className="custom-width mx-auto" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <InputComponent
                  typeProp={"text"}
                  nameProp="name"
                  classNameProp="form-control"
                  defaultValueProp={userDetailProp.name}
                  onChangeHandler={editUserData}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <InputComponent
                  typeProp="email"
                  nameProp="email"
                  classNameProp="form-control"
                  defaultValueProp={userDetailProp.email}
                  onChangeHandler={editUserData}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <InputComponent
                  typeProp="number"
                  nameProp="age"
                  classNameProp="form-control"
                  defaultValueProp={userDetailProp.age}
                  onChangeHandler={editUserData}
                />
              </div>
              <div className="d-flex flex-wrap gap-2">
                <div className="form-check">
                  <InputComponent
                    classNameProp="form-check-input bg-gray"
                    typeProp="radio"
                    nameProp="gender"
                    defaultValueProp={"male"}
                    defaultCheckedProp={
                      userDetailProp.gender === "male" ? true : false
                    }
                    onChangeHandler={editUserData}
                  />
                  <label className="form-check-label ">Male</label>
                </div>
                <div className="form-check">
                  <InputComponent
                    classNameProp="form-check-input bg-gray"
                    typeProp="radio"
                    nameProp="gender"
                    defaultValueProp="female"
                    defaultCheckedProp={
                      userDetailProp.gender === "female" ? true : false
                    }
                    onChangeHandler={editUserData}
                  />
                  <label className="form-check-label ">Female</label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-outline-primary mt-2"
                // disabled={!isFormValid}
                onClick={()=>setIsOpenProp(false)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
