import React, { useState, useEffect } from 'react'
import { getAllPosts } from '../../services/posts'
import Posts from './Posts'
import Search from './Search'
import './Posts.css'

export default function PostsFilter(props) {
  const [posts, setPosts] = useState([])
  const [searchResult, setSearchResult] = useState([])

  const { locations } = props;

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts()
      setPosts(allPosts)
      setSearchResult(allPosts)
    }
    fetchPosts()
  }, [])

  const handleSearch = (e) => {
    const results = posts.filter((post) =>
      post.location.name.includes(e.target.value)
    )
    results.length === 0 ? setSearchResult(posts) :
      setSearchResult(results)
  }

  const handleSubmit = (e) => e.preventDefault()

  return (

    <div className='main-post-container'>
      <div className='all-posts-container'>
        <Search onSubmit={handleSubmit} handleSearch={handleSearch} locations={locations} />
        <Posts searchResult={searchResult} />
      </div>
    </div>
  )
}
