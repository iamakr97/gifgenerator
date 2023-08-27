import './Random.css';
import React, { useEffect, useState } from 'react'
const API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
function Randomgif() {

  const [loader, setLoader] = useState(false);
  const [gif, setGif] = useState("");
  async function fetchGifData() {
    setLoader(true);
    try {
      const result = await fetch(url);
      const data = await result.json();
      const image = data.data.images.fixed_height.url;
      setGif(image);
    } catch (error) {
      alert("Data Not Found");
    }
    setLoader(false);
  }
  function randomClickHandler(event) {
    event.preventDefault();
    fetchGifData();
  }

  useEffect(() => {
    fetchGifData();
  }, [])

  return (
    <div className='random-gif-container'>
      <div className="random-gif">
        <h2>A Random GIF</h2>
        <div className='image-container'>
          {
            !loader ?
              <img src={gif} className='gif-image' /> :
              <div className="custom-loader"></div>
          }
        </div>
        <button
          onClick={randomClickHandler}
          className='random-btn'
        >
          Random Generator
        </button>
      </div>

    </div>
  );
}

export default Randomgif