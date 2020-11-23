import React from 'react';
import { Link } from 'react-router-dom';

import '../sidebar/sidebar.css';

import medicIcon from '../../images/medico.svg';
import pacientIcon from '../../images/pacientes.svg';
import kitIcon from '../../images/kit-medico.svg';
import pranchetIcon from '../../images/prancheta.svg';
import pasteIcon from '../../images/pasta-medica.svg';
import userIcon from '../../images/usuario1.svg';

export default function Sidebar() {
    return (
        <aside className="app-sidebar">
            <header>
                <Link to="/listaMedicos">
                    <img className="medicIcon" src={medicIcon} alt="medicos" />
                </Link>
                <p>Médicos</p>
                <Link to="/listaPacientes">
                    <img src={pacientIcon} alt="pacientes" />
                </Link>
                <p>Pacientes</p>
                <Link to="/listaMedicamentos">
                    <img src={kitIcon} alt="medicamentos" />
                </Link>
                <p>Medicamentos</p>
                <Link to="/listaPrescricoesSugeridas">
                    <img src={pranchetIcon} alt="prescrições" />
                </Link>
                <p>Modelo de Prescrições</p>
                <Link to="/prontuario">
                    <img src={pasteIcon} alt="prontuario" />
                </Link>
                <p>Prontuário</p>
                <Link to="/listaUsuarios">
                    <img className="userIcon" src={userIcon} alt="usuario" />
                </Link>
                <p>Usuarios</p>
            </header>

            <footer>
                <strong> </strong>
            </footer>
        </aside>
    );
}