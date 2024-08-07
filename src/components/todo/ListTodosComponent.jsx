import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService"

export default function ListTodosComponent() {
  const [todos, setTodos] = useState([])
  const [message, setMessage] = useState(null)

  useEffect (
    () => refreshTodos(), []
  )

  function refreshTodos() {
    retrieveAllTodosForUsernameApi('ioana')
      .then(response => {
        setTodos(response.data)
      })
      .catch(error => console.log(error))
  }

  function deleteTodo(id) {
    deleteTodoApi('ioana', id)
      .then(
        () => {
          setMessage(`Delete of To Do with id:${id} succesful`)
          refreshTodos()
        }
      )
      .catch(error => console.log(error))
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