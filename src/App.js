import './App.css';
import React, { useState } from 'react';
import AlbumCovers from './AlbumCovers';
import DisplayAlbum from './DisplayAlbum';

function App() {
  const [imageSource, setImageSource] = useState("/images/thewall.jpg");

  const handleTerClick = (clickedImageSrc) => {
    setImageSource(clickedImageSrc);
  }

  return (
    <div className="App">
      <section className="main">
        <AlbumCovers onCoverClick={handleTerClick} />
        <DisplayAlbum imageSource={imageSource} />
      </section>
    </div>
  );
}

export default App;
