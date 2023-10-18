import React from "react";

const InputComponent = ({
  typeProp,
  nameProp,
  classNameProp,
  valueProp,
  defaultValueProp,
  onChangeHandler,
  checkedProp,
  defaultCheckedProp,
}) => {
  return (
    <input
      className={classNameProp}
      type={typeProp}
      name={nameProp}
      value={valueProp}
      defaultValue={defaultValueProp}
      onChange={onChangeHandler}
      checked= {checkedProp}
      defaultChecked={defaultCheckedProp}
      
    />
  );
};

export default InputComponent;
