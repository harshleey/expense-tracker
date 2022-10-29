import { useState } from "react"

const AddBudget = ({onAdd}) => {
    const [budget, setBudget] = useState("")

    const onSubmit = (e) => {
    e.preventDefault()
    onAdd(budget)
        
     
    }


    return (
        <div>
        <form onSubmit={onSubmit}>
            <div className="budget control">
                <label>Purpose</label>
                <input 
                type="text"
                name="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                />
            </div>

            <input type="submit" value="Add Budget" />
        </form>
         
         <div>
            <h2>Budget</h2>
            <p>{budget}</p>
         </div>
        </div>
    )
}

export default AddBudget