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
      <div className='profile-posts-container'>
        {posts.map((post, index) => (
          <div key={index} className='blah'>
            {post.user_id === currentUser.id &&
              <ProfileCard
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                post={post} />}
          </div>
        ))}

      </div>
      <Link to='/posts/new'><button>NEW POST</button></Link>
    </>
  )
}
