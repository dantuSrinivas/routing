import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TokenContext } from '../context/context'

const Login = () => {

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    let { setToken } = useContext(TokenContext)
    const navigate = useNavigate()

    const HandleLogin = () => {
        if (userName && password) {
            if (userName === "srinu" && password === "12345") {
                setToken(true)
                navigate("/")
            } else {
                console.log("invalid input")
            }
        } else {
            console.log("please enter username and password")
        }
    }

    return (
        <div>
            <div className='form'>
                <label>UserName</label>
                <input
                    type="text"
                    name="userName"
                    onChange={(e) => { setUserName(e.target.value) }}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button onClick={() => { HandleLogin() }}>Login</button>
            </div>
        </div>
    )
}

export default Login