import { render } from "react-dom"
import { useState } from "react"

export default function Auth({ email, pwd, setEmail, setPwd }) {
    const [register, setRegister] = useState(false)
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")

    function handleClick(evt) {
        setEmail(evt.target.form[0].value)
        setPwd(evt.target.form[1].value)
        console.log(email, pwd)
    }

    const renderRegister = () => !register ? null : (
        <>
            <input onChange={e => setFName(e.target.value)}
                type="text" value={fName}
                placeholder="First Name" />
            <input onChange={e => setLName(e.target.value)}
                type="text"
                value={lName}
                placeholder="Last Name" />
        </>
    )


    function handleRegisterBtn(e) {
        e.preventDefault()
        setRegister(!register)
    }

    const handleSwitchBtn = () => register ? "Login" : "Register"

    /* 
        ? Challenge
        * Create a firstName and lastName input fields
        * Create a button for register/login
        * The default auth state should be for login
        * If someone presses the register/login button, it should show fname, lname field
        * The value of the button should now change from register back to login
        * Ensure this works vice versa as well (register to login / login to register)
        ! NOT SO SPICEY CHALLENGE (make it look pretty)
    */

    return (
        <form>
            {renderRegister()}
            <input onChange={e => console.log(e.target.value)} type="email" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />
            <input onClick={handleClick} type="button" value="Submit" />
            <button onClick={handleRegisterBtn}>{handleSwitchBtn()}</button>
        </form>
    )
}
