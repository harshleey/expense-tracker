import {FaTrashAlt} from "react-icons/fa"
const Expense = ({expense, onDelete}) => {
    return (  
            <tr>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td><FaTrashAlt style={{color: "red", cursor: "pointer"}} onClick={() => onDelete(expense.id)}/></td>
            </tr>
    )
}

export default Expense