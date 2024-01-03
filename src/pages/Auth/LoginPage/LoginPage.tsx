import * as React from 'react';
import { Link }  from 'react-router-dom';
import { useForm } from 'react-hook-form';

import axios from 'axios';

import "./LoginPage.scss";
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import AppInput from '../../components/AppInput/AppInput';

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
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const login = (input: LoginForm) => {
    axios.post(`http://localhost:3000/login`, input)
      .then(res => {
        console.log('res', res);
      })
  };

  const appData = [
    {
      labelName: "Name",
      type: "text",
      fieldName: "name",
      validators: {
        required: "This is required.",
        value: 8,
        message: "Minimum 8 characters",
      }
    },
    {
      labelName: "Email",
      type: "email",
      fieldName: "email",
      validators: {
        required: "This is required.",
        value: 8,
        message: "Minimum 8 characters",
      }
    },
    {
      labelName: "Password",
      type: "password",
      fieldName: "password",
      validators: {
        required: "This is required.",
        value: 8,
        message: "Minimum 8 characters",
      }
    },
  ]

  return (
    <AuthLayout>
        <form className="login-forms" onSubmit={handleSubmit(login)}>

          <AppInput errors={errors} register={register} labelName={appData[1].labelName} type={appData[1].type} fieldName={appData[1].fieldName} validators={appData[0].validators}/>
          <AppInput errors={errors} register={register} labelName={appData[2].labelName} type={appData[2].type} fieldName={appData[2].fieldName} validators={appData[0].validators}/>
            {/*<label>*/}
            {/*    Email:*/}
            {/*    <input type="email" {...register("email",{*/}
            {/*      required: "This is required."*/}
            {/*    })}/>*/}
            {/*  <ErrorMessage errors={errors} name="email" />*/}
            {/*</label>*/}

            {/*<label>*/}
            {/*    Password:*/}
            {/*    <input type="password" {...register("password", {*/}
            {/*      required: "This is required.",*/}
            {/*      minLength: {*/}
            {/*        value: 8,*/}
            {/*        message: 'Minimum 8 characters',*/}
            {/*      }*/}
            {/*    })}/>*/}
            {/*  <ErrorMessage errors={errors} name="password" />*/}
            {/*</label>*/}

          <button className="login-button">Register</button>
        </form>

        <div className="login-link">
          <Link to="/auth/sign-up">Go To Sign Up</Link>
        </div>
    </AuthLayout>
  );
}

export default LoginPage;


