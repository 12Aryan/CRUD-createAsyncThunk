import React from "react";

const InputComponent = ({
  typeProp,
  nameProp,
  classNameProp,
  valueProp,
  onChangeHandler,
}) => {
  return (
    <input
      className={classNameProp}
      type={typeProp}
      name={nameProp}
      value={valueProp}
      onChange={onChangeHandler}
    />
  );
};

export default InputComponent;
