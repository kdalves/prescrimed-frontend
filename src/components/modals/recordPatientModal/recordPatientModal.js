import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GetPatients from '../../../services/ServicePatients/getPatients';
import PatientList from '../../patientList/PatientListComp';

export const RecordPatientModal = ({ onClose = () => { } }) => {
    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState('');
    console.log('search:', search);
    console.log('patients: ', patients);

    useEffect(() => {
        const params = {};
        if (search) {
            params.Nome_like = search;
        }

        const getPatients = async () => {
            const response = await GetPatients({ params });
            console.log('response', response)
            setPatients(response);
        };

        getPatients();

    }, [search]);

    return (
        <Modal> {/*posição dele na tela, display flex etc*/}
            <Container> {/*background , tipo fonte etc*/}
                <BtnClose>
                    X
                </BtnClose>
                <input className="input-modal"
                    placeholder="Busque o nome do paciente"
                    value={search}
                    onChange={(ev) => setSearch(ev.target.value)}
                />
                <button>

                </button>
                <div className="content"> {/*margin, onde fica a lista */}
                    {patients.map((patient) => (
                        <p>{patient.Nome}</p>
                    ))}

                </div>

            </Container>
        </Modal>
    );
}

const Modal = styled.div`
width: 470px;
position: absolute;
top: 20px;
right: 32%;
`
const Container = styled.div`
background-color: #dbe1ea;
color: #000;
width: 100%;
display:flex;
flex-direction: column;
justify-content: space-between;
`
const BtnClose = styled.button`
width: 30px;
padding: 2px;
background: 0;
border: 0;
`