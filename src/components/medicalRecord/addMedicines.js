import React from 'react';
import '../medicalRecord/addMedicines.css';
import searchMedicines from '../../images/loupe.png';

const AddMedicines = () => {
    return (
        <fieldset>
            <div className="medicine-content">
                <div className="inputs-content">
                    <div className="medicine input-block">
                        <label htmlFor="medicamento">Medicamento</label>
                        <div className="loupe-content">
                            <input id="medicamento" />
                            <img className="loupe" src={searchMedicines} href="#" />
                        </div>
                    </div>
                    <div className="posologia input-block">
                        <label htmlFor="posologia">Posologia</label>
                        <input id="posologia" />
                    </div>
                </div>

            </div>
        </fieldset>
    )
}
export default AddMedicines;