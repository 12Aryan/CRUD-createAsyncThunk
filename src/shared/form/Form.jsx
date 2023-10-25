import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, getUsers } from "../../features/users/redux/usersSlice";
import { useNavigate } from "react-router-dom";
import InputComponent from "../Input/InputComponent";
import './Form.css'

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const getUserData = (e) => {
    setUserData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
    const isValid = Object.values(userData).every((value) => value !== "");
    setIsFormValid(isValid);
  };
  const submitUserData = async (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    setUserData({
      name: "",
      email: "",
      age: "",
      gender: "",
    });
    await dispatch(getUsers());
    setTimeout(()=>{
      navigate("/users");
    }, 500)    
  };

  return (
    <div className="custom-90vh d-flex justify-content-center align-items-center p-5">
      <form className="form-custom-width mx-auto" onSubmit={submitUserData}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <InputComponent
            typeProp={"text"}
            nameProp="name"
            classNameProp="form-control"
            valueProp={userData.name}
            onChangeHandler={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <InputComponent
            typeProp="email"
            nameProp="email"
            classNameProp="form-control"
            valueProp={userData.email}
            onChangeHandler={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <InputComponent
            typeProp="number"
            nameProp="age"
            classNameProp="form-control"
            valueProp={userData.age}
            onChangeHandler={getUserData}
          />
        </div>
        <div className="d-flex flex-wrap gap-4">
          <div className="form-check">
            <InputComponent
              classNameProp="form-check-input bg-gray"
              typeProp="radio"
              nameProp="gender"
              valueProp={"male"}
              onChangeHandler={getUserData}
            />
            <label className="form-check-label ">Male</label>
          </div>
          <div className="form-check">
            <InputComponent
              classNameProp="form-check-input bg-gray"
              typeProp="radio"
              nameProp="gender"
              valueProp="female"
              onChangeHandler={getUserData}
            />
            <label className="form-check-label ">Female</label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary mt-2"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
