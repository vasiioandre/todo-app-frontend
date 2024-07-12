import {useParams, Link} from 'react-router-dom'

export default function WelcomeComponent() {
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