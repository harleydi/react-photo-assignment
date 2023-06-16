import './App.css';
import { useState } from 'react';
import PhotoSec from './Components/PhotoSec';
import LikedPhotos from './Components/LikedPhotos';
import DislikedPhotos from './Components/DislikedPhotos';

function App() {
  const [photos, setPhotos] = useState([
    "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5122188/pexels-photo-5122188.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5255202/pexels-photo-5255202.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/733835/pexels-photo-733835.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5732474/pexels-photo-5732474.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/15421538/pexels-photo-15421538/free-photo-of-puppy-sleeping-on-owner-s-lap.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
  ])
  const [likes, setLikes] = useState([])
  const [disLikes, setDisLikes] = useState([])

  const handleLikes = (src) => {
    if (!photos.includes(src)) {
      const remainingPhotos = disLikes.filter((pic) => {
        return pic !== src
      })
      setDisLikes(remainingPhotos)
      return setLikes([...likes, src])
    }
    const remainingPhotos = photos.filter((pic) => {
      return pic !== src
    })
    setPhotos(remainingPhotos)
    return setLikes([...likes, src])
  }

  const handleDislikes = (src) => {
    if (!photos.includes(src)) {
      const remainingPhotos = likes.filter((pic) => {
        return pic !== src
      })
      setLikes(remainingPhotos)
      return setDisLikes([...likes, src])
    }
    const remainingPhotos = photos.filter((pic) => pic !== src)
    setPhotos(remainingPhotos)
    return setDisLikes([...disLikes, src])
  }

  console.log(likes)
  return (
    <div className="App">
      <PhotoSec 
        photos={photos}
        handleLikes={handleLikes}
        handleDislikes={handleDislikes}
      />
      <div className='likes-container'> 
        <LikedPhotos
          likes={likes}
          handleLikes={handleLikes}
          handleDislikes={handleDislikes}
        />
        <DislikedPhotos
          disLikes={disLikes}
          handleLikes={handleLikes}
          handleDislikes={handleDislikes}
        />
      </div>
      
    </div>
  );
}

export default App;
