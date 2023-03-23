
import './App.css';
import Posts from './Posts'
import  Post from './Post'
import { useState, useEffect } from 'react';
const url = ('https://jsonplaceholder.typicode.com/posts/1')



function App() {
  const [posts, setPosts] = useState("")
  const[post, setPost] = useState("")


  const fetchPosts = async () => {
    try{
    const response = await fetch(url)
    const posts = await response.json()
    setPosts(posts)
    setPost(posts)
  } catch (error) {
    console.log(error)
  }
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <div className="App">
      <Posts posts={posts} />
      <Post key={post.id} {...post} />

    </div>
  );
}

export default App;
