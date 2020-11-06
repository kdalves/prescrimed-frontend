import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/pages//login/landing.css'

import Login from '../../components/login/Login.js'
import Logo from '../../components/logo/Logo.js';

export default function LoginPage() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <Logo></Logo>
        <Login cpf="CPF" senha="SENHA"></Login>
        <Link to="/menu" className="enter-app">Menu</Link>
      </div>
    </div>
  );
}

