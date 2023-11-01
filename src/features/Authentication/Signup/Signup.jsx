import { useState } from "react";
import "./Signup.css";
import { Formik, Form } from "formik";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  country: "",
};

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [showCnfPass, setCnfShowPass] = useState(false);
  const handleSubmit = (values) => {
    console.log(values);
    // e.preventDefault();
    console.table(values);
  };
  const handleShowPassword = () => {
    setShowPass(!showPass);
  };
  const handleShowCnfPassword = () => {
    setCnfShowPass(!showCnfPass);
  };
  return (
    <div className="signup-wrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({
          values,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <Form className="form">
            <div className="name-div">
              <label htmlFor="name">Name</label>
              <div className="name-input">
                <input
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="email-div">
              <label htmlFor="email">Email</label>
              <div className="email-input">
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="password-div">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  name="password"
                  type={`${showPass ? "text" : "password"}`}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <i
                  className={`${showPass ? "fa fa-eye" : "fa fa-eye-slash"}`}
                  onClick={handleShowPassword}
                ></i>
              </div>
            </div>
            <div className="confirm-password-div">
              <label htmlFor="confirm_password">Confirm-Password</label>
              <div className="confirm-password-input">
                <input
                  name="confirm_password"
                  type={`${showCnfPass ? "text" : "password"}`}
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <i
                  className={`${showCnfPass ? "fa fa-eye" : "fa fa-eye-slash"}`}
                  onClick={handleShowCnfPassword}
                ></i>
              </div>
            </div>
            <div className="country-div">
              <label htmlFor="country">Country</label>
              <span className="country">
                <select
                  name="country"
                  id="country"
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <option value="uk">UK</option>
                  <option value="us">US</option>
                  <option value="canada">Canada</option>
                </select>
              </span>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
