import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

export default function ListTodosComponent() {
  const [todos, setTodos] = useState([])
  const [message, setMessage] = useState(null)

  const AuthContext = useAuth()
  const username = AuthContext.username

  const navigate = useNavigate()

  useEffect (
    () => refreshTodos(), []
  )

  function refreshTodos() {
    retrieveAllTodosForUsernameApi(username)
      .then(response => {
        setTodos(response.data)
      })
      .catch(error => console.log(error))
  }

  function deleteTodo(id) {
    deleteTodoApi(username, id)
      .then(
        () => {
          setMessage(`Delete of To Do with id:${id} successful`)
          refreshTodos()
        }
      )
      .catch(error => console.log(error))
  }

  function updateTodo(id) {
    navigate(`/todo/${id}`)
  }

  return (
    <div className="container">
      <h1>Things you want to do</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>DESCRIPTION</th>
              <th>IS DONE?</th>
              <th>TARGET DATE</th>
              <th>DELETE</th>
              <th>UPDATE</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(
                todo => (
                  <tr key={todo.id}>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                    <td><button className="btn btn-warning"
                      onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                    <td><button className="btn btn-success"
                      onClick={() => updateTodo(todo.id)}>Update</button></td>
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