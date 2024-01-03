import * as React from 'react';
import { Link }  from 'react-router-dom';
import { useForm } from "react-hook-form";
import SignUpPage from '../SignUpPage/SignUpPage';


function LoginPage() {
  const {
    register,
    formState:{errors},
    handleSubmit,
  } = useForm();

  return (
    <>
      <form >
        <input />
      </form>

      <div>
        <Link to="/auth/sign-up">Go To Sign Up</Link>
      </div>
    </>
  );
}

export default LoginPage;
