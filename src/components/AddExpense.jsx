import { useState } from "react"

const AddExpense = ({onAdd, onClick}) => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({name, amount, date})

        setName('')
        setAmount('')
        setDate('')
    } 

    // console.log(onClick)

    return (
        <>
        {<form onSubmit={onSubmit}>
            <div className="expense-form">
            <label>Name</label>
                <input 
                type="text"
                placeholder="Add item"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required/>
            </div>

            <div className="expense-form">
            <label>Amount</label>
                <input 
                type="text"
                placeholder="Add Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required/>
            </div>

            <div className="expense-form">
            <label>Date</label>
                <input 
                type="date"
                placeholder="Input date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required/>
            </div>


            <input type="submit" value="Add expense" className="add-expense"/>

        </form>}
        </>
    )
}

export default AddExpense