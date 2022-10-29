import { useState } from "react"
import Button from "./Button"
const Header = ({onToggle}) => {
    // const [toggle, setToggle] = useState(true)

    // const handleChange = () => {
    //     setToggle(prevState => !prevState)
    //     console.log(toggle)
    // }

    return (
        <header className="header">
            <h1 className="heading">Ex-Spence</h1>
            {/* <Button onClick={onToggle}/> */}
        </header>
    )
}

export default Header