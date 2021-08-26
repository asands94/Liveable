import { Link } from 'react-router-dom'
import PostsCard from './PostsCard'
import './Posts.css'

export default function Posts(props) {
  const { posts, handleDelete, currentUser } = props;
  return (
    <>
      <div className='all-posts-container'>
        {posts.reverse().map((post, index) => {
          return (
            <div key={index}>
              <PostsCard post={post} />
            </div>
          )
        })}
      </div>
    </>
  )
}
