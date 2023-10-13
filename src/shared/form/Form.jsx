import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    gender: null,
  });

  const getInputData = (e) => {
    console.log(e.target.value);
    setUserData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  console.log('userData--', userData)
  return (
    <div>
      <form className="w-25 mx-auto">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getInputData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={ getInputData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={ getInputData}
          />
        </div>
        <div className="d-flex gap-4">
          <div className="form-check">
            <input
              className="form-check-input bg-gray"
              type="radio"
              name="gender"
              value='male'
              onChange={ getInputData}
            />
            <label className="form-check-label ">Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input bg-gray"
              type="radio"
              name="gender"
              value='female'
              onChange={ getInputData}
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
