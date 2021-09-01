import { Link } from 'react-router-dom'
import HomePostCard from "./HomePostCard"
import './Home.css'
import PostCreate from '../PostCreate/PostCreate';
import HomeInfoCard from './HomeInfoCard';
import Expand from '../../assets/expand.svg'
import homeFooter from '../../assets/homefooter.svg'

export default function Home(props) {
  const { posts, handleCreate, locations, currentUser, categories } = props;


  return (
    <>
      {posts.length !== 0 ?
        (<>
          <div className='posts-info-container'>
            {posts.reverse().map((post, index) => {
              return (
                <div className='home-post-cards' key={index}>

                  <HomePostCard post={post} />

                </div>
              )
            })}
          </div>
          <Link to='/posts'><button className='action-button'>READ MORE</button></Link>
        </>)
        :
        (<div className='posts-info-container'><div className='empty'></div></div>)

      }
      <div className='info-container'>
        <HomeInfoCard />
      </div>
      <img className='expand-icon' src={Expand} alt='expand icon' />
      <PostCreate
        categories={categories}
        currentUser={currentUser}
        locations={locations}
        handleCreate={handleCreate}
      />
    </>
  )
}
