import * as React from 'react';
import {Link} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
// import { useForm } from "react-hook-form";

function SignUpPage() {
  return (
    <div>
      <Link to="/auth/login">Go to login</Link>
    </div>

  );
}

export default SignUpPage;
