import { useState, useEffect } from 'react'
import Header from "./components/Header"
// import Budget from "./components/Budget"
// import AddBudget from "./components/AddBudget"
import Expenses from "./components/Expenses"
import AddExpense from "./components/AddExpense"


function App({}) {
  const [toggle, setToggle] = useState(true)
  const [expenses, setExpenses] = useState(
    () => JSON.parse(localStorage.getItem("expense")) || []
    )

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expenses))
  }, [expenses])
  


  const addAnExpense = (expense) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newExpense = {id, ...expense}
    setExpenses([...expenses, newExpense])
  }

  const deleteTask = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const handleChange = () => {
    setToggle(prevToggle => !prevToggle)
    console.log(toggle)
  }

  return (
   <div className='container'>
      <Header onToggle={handleChange}/>
      {/* <AddBudget/> */}
      <AddExpense onAdd={addAnExpense} />
      {/* <Budget OnAdd={returnBudget}/> */}
      <Expenses expenses={expenses} onDelete={deleteTask}/>
   </div>
  )
}

export default App
