import * as React from 'react';
import { Link }  from 'react-router-dom';
import { useForm } from 'react-hook-form';

import axios from 'axios';

import "./SignUpPage.scss";
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import AppInput from '../../components/AppInput/AppInput';

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
    axios.post(`http://localhost:3000/signup`, input)
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
        <form className="sign-forms" onSubmit={handleSubmit(login)}>
          <AppInput errors={errors} register={register} labelName={appData[0].labelName} type={appData[0].type} fieldName={appData[0].fieldName} validators={appData[0].validators}/>
          <AppInput errors={errors} register={register} labelName={appData[1].labelName} type={appData[1].type} fieldName={appData[1].fieldName} validators={appData[1].validators}/>
          <AppInput errors={errors} register={register} labelName={appData[2].labelName} type={appData[2].type} fieldName={appData[2].fieldName} validators={appData[2].validators}/>

          {/*<label>*/}
          {/*  Name:*/}
          {/*  <input type="text" {...register("name" ,{*/}
          {/*    required: "This is required."*/}
          {/*  })}/>*/}
          {/*  <ErrorMessage errors={errors} name="name" />*/}
          {/*</label>*/}

          {/*<label>*/}
          {/*  Email:*/}
          {/*  <input type="email" {...register("email" ,{*/}
          {/*    required: "This is required."*/}
          {/*  })}/>*/}
          {/*  <ErrorMessage errors={errors} name="email" />*/}
          {/*</label>*/}

          {/*<label>*/}
          {/*  Password:*/}
          {/*  <input type="password" {...register("password", {*/}
          {/*    required: "This is required.",*/}
          {/*    minLength: {*/}
          {/*    value: 8,*/}
          {/*    message: 'Minimum 8 characters',*/}
          {/*  }*/}
          {/*  })}/>*/}
          {/*  <ErrorMessage errors={errors} name="password" />*/}
          {/*</label>*/}

          <button className="sign-button">Register</button>
        </form>

        <div className="sign-link">
          <Link to="/auth/login">Go to login</Link>
        </div>
    </AuthLayout>
  );
}

export default SignUpPage;
