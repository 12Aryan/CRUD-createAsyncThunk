import {  useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/users/redux/usersSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    gender: null,
  });
  // const [disable, setDisable] = useState(true);

  const getUserData = (e) => {
    console.log(e.target.value);
    setUserData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const submitUserData = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    setUserData({
      name: "",
      email: "",
      age: "",
      gender: null,
    });
    // navigate("/users");
  };
  // console.log("disabled", disable);
  // useEffect(() => {
  //   //btn disable
  //   setDisable(
  //     userData.name != "" &&
  //       userData.email != "" &&
  //       userData.age != "" &&
  //       userData.gender != null
  //       ? true
  //       : false
  //   );
  // }, [userData]);

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

        <button type="submit" className="btn btn-outline-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
