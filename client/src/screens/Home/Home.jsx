import { Link } from 'react-router-dom'
import HomeCard from "./HomeCard"
import './Home.css'
import PostCreate from '../PostCreate/PostCreate';

export default function Home(props) {
  const { posts, handleCreate, locations, currentUser } = props;
  return (
    <>
      <div className='posts-container'>
        {posts.reverse().map((post, index) => {
          return (
            <div key={index}>
              {index < 5 ? (
                <HomeCard post={post} />
              ) : null}
            </div>
          )
        })}
      </div>
      <Link to='/posts'><button>READ MORE</button></Link>
      <PostCreate
        locations={locations}
        handleCreate={handleCreate}
      />
    </>
  )
}
