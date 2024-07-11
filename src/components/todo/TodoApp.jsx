import { useState } from 'react'
import {BrowserRouter, Route, Routes, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <HeaderComponent />
      To Do Management Application
      <BrowserRouter>
        <Routes>
          <Route path='' element={<LoginComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/welcome/:username' element={<WelcomeComponent />} />
          <Route path='/todos' element={<ListTodosComponent />} />
          <Route path='/logout' element={<LogoutComponent />} />
          <Route path='*' element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
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
        Manage your To Do's - <Link to="/todos">Go here</Link>
      </div>
    </div>
  )
}

function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>We are working really hard!</h1>
      <div>
        Apologies for the 404. Reach out to our team.
      </div>
    </div>
  )
}

function ListTodosComponent() {
  const today = new Date()
  const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

  const todos = [
    {id:1, description:'Learn React', done:false, targetDate:targetDate},
    {id:2, description:'Learn Java', done:false, targetDate:targetDate},
    {id:3, description:'Learn Docker', done:false, targetDate:targetDate}
  ]

  return (
    <div className="ListTodosComponent">
      <h1>Things you want to do</h1>
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>DESCRIPTION</td>
              <td>IS DONE?</td>
              <td>TARGET DATE</td>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(
                todo => (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toDateString()}</td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

function HeaderComponent() {
  return (
    <div className="header">
      Header <hr/>
    </div>
  )
}

function FooterComponent() {
  return (
    <div className="footer">
      <hr/> Footer
    </div>
  )
}

function LogoutComponent() {
  return (
    <div className="LogoutComponent">
      <h1>You are logged put!</h1>
      <div>
        Thank you for using our app. Come back soon!
      </div>
    </div>
  )
}