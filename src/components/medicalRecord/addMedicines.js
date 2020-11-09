import React from 'react';
import '../medicalRecord/addMedicines.css';
import searchMedicines from '../../images/loupe.png';

const AddMedicines = () => {
    return(
        <fieldset>
            <legend>Medicamentos</legend>
                <div className="medicine-content">
                    <div className="item input-block">
                        <label htmlFor="medicamento">Medicamento</label>
                        <div className="loupe-content">
                            <input id="medicamento"/> 
                            <img className="loupe" src={searchMedicines} href="#"/>
                        </div>
                    </div>
                    <div className="button-content">
                    <button className="exclue-medicine">Excluir</button>
                    </div>
                    <div className="item input-block">
                        <label htmlFor="posologia">Posologia</label>
                        <input id="posologia"/> 
                    </div>   
                </div>
          </fieldset>
    )
}
export default AddMedicines;