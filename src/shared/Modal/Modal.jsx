import InputComponent from "../Input/InputComponent";
import "./Modal.css";
const Modal = ({ setIsOpenProp, userDetailProp }) => {
  console.log("userDetail--", userDetailProp);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <InputComponent
                  typeProp="email"
                  nameProp="email"
                  classNameProp="form-control"
                  defaultValueProp={userDetailProp.email}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <InputComponent
                  typeProp="number"
                  nameProp="age"
                  classNameProp="form-control"
                  defaultValueProp={userDetailProp.age}
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
                  />
                  <label className="form-check-label ">Female</label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-outline-primary mt-2"
                // disabled={!isFormValid}
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
