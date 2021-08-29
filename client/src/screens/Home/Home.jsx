import { Link } from 'react-router-dom'
import HomePostCard from "./HomePostCard"
import './Home.css'
import PostCreate from '../PostCreate/PostCreate';
import HomeInfoCard from './HomeInfoCard';
import Expand from '../../assets/expand.svg'
import homeFooter from '../../assets/homefooter.svg'

export default function Home(props) {
  const { posts, handleCreate, locations, currentUser } = props;
  return (
    <>
      <div className='posts-info-container'>
        {posts.reverse().map((post, index) => {
          return (
            <div className='home-post-cards' key={index}>
              {index < 10 ? (
                <HomePostCard post={post} />
              ) : null}
            </div>
          )
        })}
      </div>
      <Link to='/posts'><button className='action-button'>READ MORE</button></Link>
      <div className='posts-info-container'>
        <HomeInfoCard />
      </div>
      <img className='expand-icon' src={Expand} alt='expand icon' />
      <PostCreate
        currentUser={currentUser}
        locations={locations}
        handleCreate={handleCreate}
      />
      <img className='home-footer' src={homeFooter} alt='home footer' />
    </>
  )
}
