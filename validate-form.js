import { useState } from "react";
const useManagingInput = (initialValue, validationCheck) => {
  const [value, setValue] = useState(initialValue);
  const [isInputValid, setInputValid] = useState(false);

  //let isInputValid = false;

  const handleInput = (newValue) => {
    setValue(newValue);
    setInputValid(validationCheck(newValue));
  };
  return {
    value,
    isInputValid,
    handleInput,
  };
};

export default useManagingInput;
