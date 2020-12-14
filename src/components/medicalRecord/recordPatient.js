import React, { useContext, useEffect, useState } from "react";
import "./recordPatient.css";
import searchPatients from "../../images/loupe32.png";
import { SearchContext } from "../../contexts/searchContext";
import GetPatients from "../../services/ServicePatients/getPatients";
import { RecordPatientModal } from "../modals/recordPatientModal/recordPatientModal";

const RecordPatient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const { search, newSearch } = useContext(SearchContext);
  console.log('pacientes', patients);

  const getPatients = async () => {
    const response = await GetPatients();
    setPatients(response);
  };

  const userFiltered = patients.filter((user) => user.Nome == search);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onClickSearch = () => {
    newSearch(searchTerm);
    getPatients();
  };

  return (
    <div className="recordPatient-content">
      <div className="patient-search">
        <input
          className="search-input"
          onChange={handleChange}
          value={searchTerm}
        />
        <button
          type="button"
          className="btn btn-search"
          onClick={onClickSearch} // BUSCA: onClickSearch || MODAL: () => setModalVisible(true)
        >
          <img src={searchPatients} />
        </button>
        {isModalVisible ? (
          <RecordPatientModal onClose={() => setModalVisible(false)} />
        ) : null}
      </div>

      <div>
        <div className="patient-content">
          {/* <div className="information-content"> */}
          <div className="measures-content patient">
            <p>Informações do Paciente</p>
            {/* <div className="item"> */}
            <div className="measures-item">
              <label>Nome</label>
              {userFiltered.map((user) => (
                <input
                  id="Nome"
                  name="Nome"
                  value={user.Nome}
                  disabled="disabled"
                />
              ))}
            </div>
            {/* <div className="item"> */}
            <div className="measures-item">
              <label>Nome Social</label>
              {userFiltered.map((user) => (
                <input
                  value={user.NomeSocial}
                  id="NomeSocial"
                  name="NomeSocial"
                  disabled="disabled" /*onChange={onChange} value={values?.NomeSocial} */
                />
              ))}
            </div>
            {/* <div className="item"> */}
            <div className="measures-item">
              <label>Sexo</label>
              {userFiltered.map((user) => (
                <input
                  value={user.Sexo}
                  id="Sexo"
                  name="Sexo"
                  disabled="disabled" /*onChange={onChange} value={values?.Sexo}*/
                />
              ))}
            </div>
            {/* <div className="item"> */}
            <div className="measures-item">
              <label>Idade</label>
              {userFiltered.map((user) => (
                <input
                  value={user.Nascimento}
                  id="Nascimento"
                  name="Nascimento"
                  disabled="disabled" /*onChange={onChange} value={values?.Idade}*/
                />
              ))}
            </div>
            {/* <div className="item"> */}
            <div className="measures-item">
              <label>CPF</label>
              {userFiltered.map((user) => (
                <input
                  value={user.CPF}
                  id="CPF"
                  name="CPF"
                  disabled="disabled" /*onChange={onChange} value={values?.CPF} */
                />
              ))}
            </div>
          </div>
          <div className="measures-content">
            <p>Medidas Antropométricas</p>
            <div className="measures-item">
              <label>Peso (kg)</label>
              {userFiltered.map((user) => (
                <input
                  value={user.Peso}
                  className="input-measures"
                  id="Peso"
                  name="Peso"
                  disabled="disabled" /*onChange={onChange} value={values?.Peso}*/
                />
              ))}
            </div>
            <div className="measures-item">
              <label>Altura (cm)</label>
              {userFiltered.map((user) => (
                <input
                  value={user.Altura}
                  className="input-measures"
                  id="Altura"
                  name="Altura"
                  disabled="disabled" /*onChange={onChange} value={values?.Altura}*/
                />
              ))}
            </div>
            <div className="measures-item">
              <label>Superfície Corporal</label>
              {userFiltered.map((user) => (
                <input
                  value={user.Superficie}
                  className="input-measures"
                  id="Superficie"
                  name="Superficie"
                  disabled="disabled" /*onChange={onChange} value={values?.Superficie} */
                />
              ))}
            </div>
          </div>
        </div>
        <div className="allergy-content">
          <p>Alergias</p>
          <div className="item">
            <input
              id="Alergias"
              name="Alergias"
              disabled="disabled" /*onChange={onChange} value={values?.Alergias}*/
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordPatient;
