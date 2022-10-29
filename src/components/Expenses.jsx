import Expense from "./Expense"



const Expenses = ({expenses, onDelete}) => {
    return (
        <div className="table">
            
           {expenses.length > 0 ? <table>
                <thead>
                    <tr>
                        <th className="name">Name</th>
                        <th className="amount" style={{width: "25%", textAlign: "center"}}>Amount ($)</th>
                        <th className="date" style={{width: "25%"}}>Date</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {expenses.map(expense => <Expense key={expense.id} onDelete={onDelete} expense={expense}/> )}
                </tbody>
            </table> : ""}


            
        </div>
    )
}

export default Expenses