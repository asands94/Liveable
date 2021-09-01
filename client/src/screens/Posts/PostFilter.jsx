import PostsCard from './PostsCard'
import './Posts.css'
import Footer from '../../layouts/Footer';

export default function Posts(props) {
  const { searchResult } = props;
  return (
    <div className='main-post-container'>
      <div className='posts-cards-container'>
        {searchResult.map((post, index) => (
          <div className='post-cards' key={index}>
            <PostsCard post={post} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
