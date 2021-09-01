import React, { useState, useEffect } from 'react'
import { getAllPosts } from '../../services/posts'
import PostFilter from './PostFilter'
import Search from './Search'
import './Posts.css'

export default function PostsFilter(props) {
  const [posts, setPosts] = useState([])
  const [searchResult, setSearchResult] = useState([])

  const { locations, categories } = props;

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
      post.location.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    e.target.value === 'All' ? setSearchResult(posts) :
      setSearchResult(results)
  }

  const handleSearchInput = (e) => {
    const inputResults = posts.filter((post) =>
      post.message.toLowerCase().includes(e.target.value.toLowerCase())
    )
    e.target.value === '' ? setSearchResult(posts) :
      setSearchResult(inputResults)

  }

  const handleSubmit = (e) => e.preventDefault()

  return (

    <div className='main-post-container'>
      <div className='all-posts-container'>
        <Search
          onSubmit={handleSubmit}
          handleSearch={handleSearch}
          handleSearchInput={handleSearchInput}
          locations={locations}
          categories={categories} />
        <PostFilter
          searchResult={searchResult} />
      </div>
    </div>
  )
}
