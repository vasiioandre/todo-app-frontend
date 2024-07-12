export default function ListTodosComponent() {
  const today = new Date()
  const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

  const todos = [
    {id:1, description:'Learn React', done:false, targetDate:targetDate},
    {id:2, description:'Learn Java', done:false, targetDate:targetDate},
    {id:3, description:'Learn Docker', done:false, targetDate:targetDate}
  ]

  return (
    <div className="container">
      <h1>Things you want to do</h1>
      <div>
        <table className="table">
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