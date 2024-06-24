import { useState } from 'react'
import {BrowserRouter, Route, Routes, useNavigate, useParams} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
  return (
    <div className="TodoApp">
      To Do Management Application
      <BrowserRouter>
        <Routes>
          <Route path='' element={<LoginComponent />}></Route>
          <Route path='/login' element={<LoginComponent />}></Route>
          <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
          <Route path='*' element={<ErrorComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function LoginComponent() {
  const [username, setUsername] = useState('ioana')
  const [password, setPassword] = useState('password')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const navigate = useNavigate()

  function handleUSernameChange(event) {
    setUsername(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function handleSubmit() {
    if(username==='ioana' && password==='password') {
      setShowSuccessMessage(true)
      setShowErrorMessage(false)
      navigate(`/welcome/${username}`)
    } else {
      setShowSuccessMessage(false)
      setShowErrorMessage(true)
    }
  }

<div className="errorMessage">Autehntication Failed. Please check your credentials.</div>
  return (
    <div className="Login">
      <h1>Login</h1>
      {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
      {showErrorMessage && <div className="errorMessage">Autehntication Failed. Please check your credentials.</div>}
      <div className="LoginForm">
        <div>
          <label>Username</label>
          <input type="text" name="username" value={username}
              onChange={handleUSernameChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password}
              onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  )
}

function WelcomeComponent() {
  const {username} = useParams()

  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Welcome Component
      </div>
    </div>
  )
}

function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>We are working really hard!</h1>
      <div>
        Apologies for the 404. Reach out to out team.
      </div>
    </div>
  )
}