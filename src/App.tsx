import * as React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
// import { useForm } from "react-hook-form";


import LoginPage from './pages/Auth/LoginPage/LoginPage';
import SignUpPage from './pages/Auth/SignUpPage/SignUpPage';

export default function App() {
  return (
    <Routes>
      <Route path="auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>

  );
}
