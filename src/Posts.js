import React from 'react'
import Post from './Post'

const Posts = (post) => {
  return (
    <div className='title'>
        <h2>Posts</h2>

        <div>
 <Post key={post.id} {...post} />
        </div>
        </div>
  )
}

export default Posts