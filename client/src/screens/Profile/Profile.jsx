import { Redirect, Link } from 'react-router-dom'
import './Profile.css'
import ProfileCard from './ProfileCard'
import './Profile.css'

export default function Profile(props) {
  const { currentUser, posts, handleUpdate, handleDelete } = props;

  if (!currentUser) {
    return <Redirect to='/' />
  }
  return (
    <>
      <div className='profile-container'>
        <div className='profile-text-container'>
          <h1>My Posts</h1>
        </div>
        <div className='profile-posts-container'>
          {posts.map((post, index) => (
            <div key={index} className='profile-cards'>
              {post.user_id === currentUser.id &&
                index < 4 ? (<ProfileCard
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  post={post} />) : null}
            </div>
          ))}
        </div>

      </div>
      <Link to='/posts/new'><button className='action-button'>NEW POST</button></Link>
    </>
  )
}
