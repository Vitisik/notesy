import * as React from 'react';
import { Link }  from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import axios from 'axios';

import "./SignUpPage.scss";




interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

function SignUpPage() {
  const {
    register,
    formState:{errors},
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });


  const login = (input: SignUpForm) => {
    console.log(input);

    axios.post(`http://localhost:3000/signup`, input)
      .then(res => {
        console.log('res', res);
      })
  };

  return (
    <div className="sign-page">
      <div className="container">
        <form className="sign-forms" onSubmit={handleSubmit(login)}>
          <label>
            Name:
            <input type="text" {...register("name" ,{
              required: "This is required."
            })}/>
            <ErrorMessage errors={errors} name="name" />
          </label>

          <label>
            Email:
            <input type="email" {...register("email" ,{
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

          <button className="sign-button">Register</button>
        </form>

        <div className="sign-link">
          <Link to="/auth/login">Go to login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
