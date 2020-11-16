import deleteIcon from '../../images/deleteColor.png';
import updateIcon from '../../images/refreshColor.png';
import './columnUpdateRemove.css';

const ColumnUpdateRemove = () =>{
    return(
        <td className="bank-actions"><img src={updateIcon} /> <img src={deleteIcon} /></td>
    )
}
export default ColumnUpdateRemove;