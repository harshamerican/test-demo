import React, { useState } from 'react';
import '@material/web/all';
import MaterialButton from '../../components/MaterialButton';
import MaterialTextField from '../../components/MaterialTextField';
import MaterialCheckBox from '../../components/MaterialCheckBox';
import logo from "../../assets/Welcome.png"; // Replace with the actual path to your logo
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log({ email, password });
    // Your login logic here
  };

  return (
    <div className="h-svh flex bg-violet-50">
      <img src={logo} alt="Logo" />
      <div className="w-1/2 flex flex-col justify-center items-center ">
        <h2 className="text-2xl font-bold mb-8">Login</h2>
        <>
          <MaterialTextField
            label="E-Mail"
            type="email"
            value={email}
            onChange={ setEmail}
          />
          <MaterialTextField
            label="Password"
            type="password"
            value={password}
            onChange={ setPassword}
          />
          <div className="flex mb-4 items-center gap-24">
            <MaterialCheckBox label="Keep me logged in" />
            <a href="/" className="text-sky-700 hover:underline ">
              Forgot your password?
            </a>
          </div>
          <MaterialButton
            className="w-full bg-sky-700 hover:bg-blue-700 text-white font-bold"
            label="Login"
            onClick={handleLogin}
          />
          <p className="text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/" className="text-sky-700 hover:underline">
              Sign up
            </Link>
          </p>
        </>
      </div>
    </div>
  );
};

export default Login;
