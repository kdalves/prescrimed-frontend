import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import deleteIcon from '../../images/close.png';
import updateIcon from '../../images/edit-notebook.png';
import DeleteProfissionais from '../../services/ServiceProfissionais/deleteProfissionais';


function EditDelButton({ routeEdit, deleteAction }) {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Delete
        </Tooltip>
      );
      

    return (
        <>            
            <td width="50px">        
            {/* <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}> */}
                <Link to={routeEdit}><img src={updateIcon} width="25px" /></Link>
            {/* </OverlayTrigger> */}
            </td>
            <td>        
                <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                    <button style={{ border: 0, background: 0 }} onClick={() => deleteAction }><img  src={deleteIcon}  width="20px" /></button>
                </OverlayTrigger>
            </td>
        </>
    );
}

export default EditDelButton;