import * as React from 'react';
import { Link }  from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import axios from 'axios';

import "./LoginPage.scss";




interface LoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }

  } = useForm({
    mode: "onBlur",
    defaultValues: {

      email: '',
      password: '',
    }
  });


  const login = (input: LoginForm) => {
    console.log(input);

    axios.post(`http://localhost:3000/login`, input)
      .then(res => {
        console.log('res', res);
      })
  };

  return (
    <div className="login-page">
      <div className="container">
        <form className="login-forms" onSubmit={handleSubmit(login)}>
            <label>
                Email:
                <input type="email" {...register("email",{
                  required: "This is required."
                })}/>
              <ErrorMessage errors={errors} name="email" />

            </label>

            <label>
                Password:
                <input type="password" {...register("password", {
                  required: "This is required.",
                  minLength: {
                    value: 8,
                    message: 'Minimum 8 characters',
                  }

                })}/>
              <ErrorMessage errors={errors} name="password" />
            </label>

          <button className="login-button">Register</button>
        </form>



        <div className="login-link">
          <Link to="/auth/sign-up">Go To Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;


