import PostsCard from './PostsCard'
import './Posts.css'
import Footer from '../../layouts/Footer';
import PostsFilter from './PostsFilter';

export default function Posts(props) {
  const { posts, locations, searchResult } = props;
  return (
    <div className='main-post-container'>
      {/* <PostsFilter posts={posts} locations={locations} /> */}
      <div className='all-posts-container'>

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
