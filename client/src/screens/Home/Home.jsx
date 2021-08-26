import { Link } from 'react-router-dom'
import HomeCard from "./HomeCard"
import './Home.css'
import CreatePost from './CreatePost';

export default function Home(props) {
  const { posts, handleCreate, currentUser } = props;
  return (
    <>
      <div className='posts-container'>
        {posts.reverse().map((post, index) => {
          return (
            <>
              {index < 5 ? (<div key={index}>
                <HomeCard post={post} />
              </div>) : null}
            </>
          )
        })}
      </div>
      <Link to='/posts'><button>READ MORE</button></Link>
      <CreatePost handleCreate={handleCreate} />
    </>
  )
}
