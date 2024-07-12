import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function LoginComponent() {
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