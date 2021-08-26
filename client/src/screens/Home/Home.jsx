import { Link } from 'react-router-dom'
import HomeCard from "./HomeCard"
import './Home.css'
import CreatePost from '../PostCreate/PostCreate';

export default function Home(props) {
  const { posts, handleCreate, currentUser } = props;
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
      <CreatePost handleCreate={handleCreate} />
    </>
  )
}
