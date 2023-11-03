import { useState } from "react";
import "./Signup.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
  const countries = ["US", "UK", "Canada", "Australia", "India"];
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
        onSubmit={(values, {setSubmitting}) => {
          handleSubmit(values);
          setSubmitting(false)
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
          isSubmitting
        }) => (
          <Form className="form">
            <div className="name-div">
              <label htmlFor="name">Name</label>
              <div className="name-input">
                <input
                  name="name"
                  type="text"
                  value={values.name}
                  placeholder="Enter Name"
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
                  placeholder="Enter Email"
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
                  placeholder="Password"
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
                  placeholder="Confirm Password"
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
                  <option value="">Select Country</option>
                  {countries.map((e,i) => (
                    <option key={i} value={e}>{e}</option>
                  ))}
                </select>
              </span>
            </div>
            <button type="submit" className="btn btn-outline-primary" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
