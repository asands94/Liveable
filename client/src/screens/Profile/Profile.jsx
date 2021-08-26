import { Redirect } from 'react-router-dom'
import './Profile.css'

export default function Profile(props) {
  const { currentUser } = props;
  console.log(currentUser)

  if (!currentUser) {
    return <Redirect to='/' />
    // return "Loading..."
  }
  return (
    <div>
      i am {currentUser?.username}
    </div>
  )
}
