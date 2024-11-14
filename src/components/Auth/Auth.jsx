export default function Auth({ email, pwd, setEmail, setPwd }) {

    function handleClick(evt) {
        setEmail(evt.target.form[0].value)
        setPwd(evt.target.form[1].value)
        console.log(email, pwd)
    }

    return (
        <form>
            <input onChange={e => console.log(e.target.value)} type="email" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />
            <input onClick={handleClick} type="button" value="Submit" />
        </form>
    )
}
