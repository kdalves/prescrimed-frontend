import React from 'react';
import '../medicalRecord/addMedicines.css';
import searchMedicines from '../../images/loupe.png';
import exclueIcon from '../../images/close.png';

const AddMedicines = () => {
    return(
        <fieldset>
            <div className="medicine-content">
                <div className="item input-block">
                    <label htmlFor="medicamento">Medicamento</label>
                    <div className="loupe-content">
                        <input id="medicamento"/> 
                        <img className="loupe" src={searchMedicines} href="#"/>
                    </div>
                </div>
                <div className="button-content">
                <a className="exclue-medicine">
                    <img className="exclue-icon" src={exclueIcon}/>
                </a>
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