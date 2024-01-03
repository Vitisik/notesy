import * as React from 'react';
import { ErrorMessage } from '@hookform/error-message';

import "./AppInput.scss";

interface AllInputForm {
  labelName: string,
  type: string,
  register: boolean,
  errors: string,
  fieldName: string,
  validators: {
    required: string,
    value: number,
    message: string,
  }
}


function AppInput({ labelName, type, register, errors, fieldName, validators}: AllInputForm) {
  console.log(validators)
  return (
    <label>
      {labelName}:
      <input  type={type} {...register(fieldName, validators
      //   {
      //   required: !!props.required,
      //   minLength: {
      //     value: props.value,
      //     message: props.message,
      //   }
      // }
      )}/>
      <ErrorMessage errors={errors} name={fieldName} />
    </label>
  );
}

export default AppInput;
