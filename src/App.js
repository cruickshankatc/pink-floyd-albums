import './App.css';
import React, { useState } from 'react';
import AlbumCovers from './AlbumCovers';
import DisplayAlbum from './DisplayAlbum';
import Test from './Test';
import AlbumInfo from './AlbumInfo';

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
        <Test testProp="test" />
      </section>
    </div>
  );
}

console.log(AlbumInfo[4].coverArt)
export default App;