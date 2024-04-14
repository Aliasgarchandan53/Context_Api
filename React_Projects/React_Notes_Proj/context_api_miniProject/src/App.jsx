import React from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <>
    <h1>Context API</h1>
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
