import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TokenContext } from '../context/context'

const HomePage = () => {

  const { setToken } = useContext(TokenContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    setToken(false)
    navigate("/login")
  }

  return (
    <div>
      Welcome to Login Page
      <button onClick={() => { handleLogout() }}>logout</button>
    </div>
  )
}

export default HomePage