import {  useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, getUsers } from "../../features/users/redux/usersSlice";
import { useNavigate } from "react-router-dom";

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
    const isValid = Object.values(userData).every((value) => value !== "" );
    setIsFormValid(isValid);

  };
  const submitUserData = async(e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    setUserData({
      name: "",
      email: "",
      age: "",
      gender: "",
    });
   await dispatch(getUsers())
    navigate("/users");
  };

  return (
    <div className="custom-90vh d-flex justify-content-center align-items-center">
      <form className="w-25 mx-auto" onSubmit={submitUserData}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={userData.name}
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={userData.email}
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={userData.age}
            onChange={getUserData}
          />
        </div>
        <div className="d-flex flex-wrap gap-4">
          <div className="form-check">
            <input
              className="form-check-input bg-gray"
              type="radio"
              name="gender"
              value={"male"}
              onChange={getUserData}
            />
            <label className="form-check-label ">Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input bg-gray"
              type="radio"
              name="gender"
              value="female"
              onChange={getUserData}
            />
            <label className="form-check-label ">Female</label>
          </div>
        </div>

        <button type="submit" className="btn btn-outline-primary mt-2" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
