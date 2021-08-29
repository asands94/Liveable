import PostsCard from './PostsCard'
import './Posts.css'

export default function Posts(props) {
  const { posts } = props;
  return (
    <>
      <div className='all-posts-container'>
        {posts.reverse().map((post, index) => (
          <div className='post-cards' key={index}>
            <PostsCard post={post} />
          </div>
        ))}
      </div>
    </>
  )
}
