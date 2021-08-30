import { Redirect, Link } from 'react-router-dom'
import './Profile.css'
import ProfileCard from './ProfileCard'
import './Profile.css'
import PostCreateModal from '../PostCreate/PostCreateModal';

export default function Profile(props) {
  const { currentUser, posts, handleUpdate, handleDelete, locations, handleCreate } = props;

  if (!currentUser) {
    return <Redirect to='/' />
  }

  if (!posts) return "Loading"
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
      <PostCreateModal
        locations={locations}
        handleCreate={handleCreate} />
    </>
  )
}
