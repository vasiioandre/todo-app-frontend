import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
  return (
    <div className="TodoApp">
      To Do Management Application
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  )
}

function LoginComponent() {

  const [username, setUsername] = useState('ioana')
  const [password, setPassword] = useState('password')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

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
    } else {
      setShowSuccessMessage(false)
      setShowErrorMessage(true)
    }
  }

  function SuccessMessageComponent() {
      if(showSuccessMessage) {
        return <div className="successMessage">Authenticated Successfully</div>
      }

      return null
  }

  function ErrorMessageComponent() {
    if(showErrorMessage) {
      return <div className="errorMessage">Autehntication Failed. Please check your credentials.</div>
    }

    return null
}

  return (
    <div className="Login">
      <SuccessMessageComponent />
      <ErrorMessageComponent />
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
  return (
    <div className="Welcome">
        Welcome Component
    </div>
  )
}