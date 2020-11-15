import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../pages/login/Login';
import Navbar from '../pages/nav/Nav';
import CadastroMedicos from '../pages/medics/MedicRegistrationNew';
import CadastroPacientes from '../pages/patients/PatientRegistration';
import CadastroUsuario from '../pages/users/UsersRegistration';
import CadastroMedicamento from '../pages/medicines/MedicinesRegistration';
import CadastroApresentacao from '../pages/medicines/apresentacao/ApresentacaoRegistration';
import CadastroProntuario from '../pages/medicalRecord/MedicalRecord';
import TelaProntuario from '../pages/medicalRecord/MedicalRecordList';
import ListaMedicos from '../pages/medics/MedicList';
import ListaPacientes from '../pages/patients/PatientList';
import ListaMedicamentos from '../pages/medicines/MedicinesList';
import ListaPrescricoesSugeridas from '../pages/prescription/PrescriptionSuggestedList';
import ListaUsuarios from '../pages/users/UsersList';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/menu" component={Navbar}/>
                <Route path="/cadastroMedicos" component={CadastroMedicos}/>
                <Route path="/cadastroPacientes" component={CadastroPacientes}/>
                <Route path="/cadastroUsuarios" component={CadastroUsuario}/>
                <Route path="/cadastroMedicamentos" component={CadastroMedicamento}/>
                <Route path="/cadastroApresentacao" component={CadastroApresentacao}/>
                <Route path="/cadastroProntuario" component={CadastroProntuario}/>
                <Route path="/listaMedicos" component={ListaMedicos}/>
                <Route path="/listaPacientes" component={ListaPacientes}/>
                <Route path="/listaMedicamentos" component={ListaMedicamentos}/>
                <Route path="/listaPrescricoesSugeridas" component={ListaPrescricoesSugeridas}/>
                <Route path="/listaUsuarios" component={ListaUsuarios}/>
                <Route path="/prontuario" component={TelaProntuario}/>
            </Switch>   
        </BrowserRouter>
    );
}
export default Routes;