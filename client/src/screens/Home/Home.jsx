import { Link } from 'react-router-dom'
import HomePostCard from "./HomePostCard"
import './Home.css'
import PostCreate from '../PostCreate/PostCreate';
import HomeInfoCard from './HomeInfoCard';

export default function Home(props) {
  const { posts, handleCreate, locations, currentUser } = props;
  return (
    <>
      <div className='posts-info-container'>
        {posts.reverse().map((post, index) => {
          return (
            <div key={index}>
              {index < 5 ? (
                <HomePostCard post={post} />
              ) : null}
            </div>
          )
        })}
      </div>
      <Link to='/posts'><button>READ MORE</button></Link>
      <div className='posts-info-container'>
        <HomeInfoCard />
      </div>
      <PostCreate
        currentUser={currentUser}
        locations={locations}
        handleCreate={handleCreate}
      />
    </>
  )
}
