import { Redirect, Link } from 'react-router-dom'
import './Profile.css'
import ProfileCard from './ProfileCard'
import './Profile.css'
import Footer from '../../layouts/Footer'
export default function Profile(props) {
  const { currentUser, posts, handleUpdate, handleDelete } = props;

  if (!currentUser) {
    return <Redirect to='/' />
  }

  if (!posts.length) return "Loading"
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

                <ProfileCard
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  post={post}
                  currentUser={currentUser} />}
            </div>
          ))}
        </div>

      </div>
      <Link to='/posts/new'><button className='action-button'>NEW POST</button></Link>
      <Footer />
    </>
  )
}
