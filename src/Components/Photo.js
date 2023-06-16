import React from 'react'
import './Photo.css'

function Photo({ src, handleLikes, handleDislikes }) {
  return (
    <div>
        <img className='img' src={src} />
        <div className='btns'>
            <button onClick={() => handleLikes(src)}>Like</button>
            <button onClick={() => handleDislikes(src)}>Dislike</button>
        </div>
    </div>
  )
}

export default Photo