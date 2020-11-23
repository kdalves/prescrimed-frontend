import deleteIcon from '../../images/deleteColor.png';
import updateIcon from '../../images/refreshColor.png';
import './columnUpdateRemove.css';

const ColumnUpdateRemove = () =>{
    return(
        <div>
            <td className="bank-actions"><img src={updateIcon} /></td>
            <td className="bank-actions"><img src={deleteIcon} /></td>
        </div>
    )
}
export default ColumnUpdateRemove;