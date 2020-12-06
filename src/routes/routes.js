import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/login/Login';
import Navbar from '../pages/nav/Nav';
import CadastroMedicos from '../pages/medics/MedicRegistrationNew';
import CadastroPacientes from '../pages/patients/PatientRegistration';
import CadastroAlergias from '../pages/patients/allergies/AllergyRegistration';
import CadastroUsuario from '../pages/users/UsersRegistration';
import CadastroMedicamento from '../pages/medicines/MedicinesRegistration';
import CadastroApresentacao from '../pages/medicines/apresentacao/ApresentacaoRegistration';
import CadastroProntuario from '../pages/medicalRecord/MedicalRecord';
import CadastroPrescricaoSugerida from '../pages/prescription/PrescriptionSuggestedRegistration';
import TelaProntuario from '../pages/medicalRecord/MedicalRecordList';
import ListaMedicos from '../pages/medics/MedicList';
import ListaPacientes from '../pages/patients/PatientList';
import ListaMedicamentos from '../pages/medicines/MedicinesList';
import ListaPrescricoesSugeridas from '../pages/prescription/PrescriptionSuggestedList';
import ListaUsuarios from '../pages/users/UsersList';
import NovoMedicamento from '../pages/prescription/NewMedicine';
import EditarMedico from '../pages/medics/EditMedic';
import EditarUsuario from '../pages/users/EditUser';
import EditarProtocolo from '../pages/prescription/PrescriptionSuggestedRegistration';
import EditarPaciente from '../pages/patients/EditPatient';
import EditarAlergias from '../pages/patients/allergies/EditAllergy';
import EditarApresentacao from '../pages/medicines/apresentacao/EditApresentacao';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/menu" component={Navbar} />
                <Route path="/cadastroMedicos" component={CadastroMedicos} />
                <Route path="/listaMedicos" component={ListaMedicos} />
                <Route path="/editarMedico/:id" component={EditarMedico} />

                <Route path="/cadastroMedicos/:id" component={CadastroMedicos} />


                <Route path="/cadastroPacientes" component={CadastroPacientes} />
                <Route path="/listaPacientes" component={ListaPacientes} />
                <Route path="/editarPaciente/:id" component={EditarPaciente} />
                <Route path="/cadastroAlergia" component={CadastroAlergias} />
                <Route path="/editarAlergia/:id" component={EditarAlergias} />

                <Route path="/cadastroUsuarios" component={CadastroUsuario} />
                <Route path="/listaUsuarios" component={ListaUsuarios} />
                <Route path="/editarUsuario/:id" component={EditarUsuario} />


                <Route path="/cadastroMedicamentos" component={CadastroMedicamento} />
                <Route path="/listaMedicamentos" component={ListaMedicamentos} />
                <Route path="/novoMedicamento" component={NovoMedicamento} />

                <Route path="/cadastroApresentacao" component={CadastroApresentacao} />
                <Route path="/editarApresentacao/:id" component={EditarApresentacao} />

                <Route path="/cadastroProntuario" component={CadastroProntuario} />
                <Route path="/prontuario" component={TelaProntuario} />

                <Route path="/cadastroPrescricaoSugerida" component={CadastroPrescricaoSugerida} />
                <Route path="/listaPrescricoesSugeridas" component={ListaPrescricoesSugeridas} />
                <Route path='/editarPrescricaoSugerida/:id' component={EditarProtocolo} />












            </Switch>
        </BrowserRouter>
    );
}
export default Routes;