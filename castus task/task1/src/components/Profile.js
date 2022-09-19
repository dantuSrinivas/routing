import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TokenContext } from '../context/context'

const Profile = () => {

    const { setToken } = useContext(TokenContext)
    const navigate = useNavigate()
  
    const handleLogout = () => {
      setToken(false)
      navigate("/login")
    }


    return (
        <div>
            Profile
            <button onClick={() => { handleLogout() }}>logout</button>
        </div>
    )
}

export default Profile