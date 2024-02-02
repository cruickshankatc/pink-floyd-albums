import './App.css';
import React, { useState } from 'react';
import AlbumCovers from './AlbumCovers';
import DisplayAlbum from './DisplayAlbum';
import Test from './Test';
import AlbumInfo from './AlbumInfo';

function App() {
  const [imageSource, setImageSource] = useState("/images/thewall.jpg");
  const [titleSource, setTitleSource] = useState("The Wall");
  const [yearSource, setYearSource] = useState("1979");
  const [ratingSource, setRatingSource] = useState("4");

  const handleTerClick = (clickedAlbum) => {
    setImageSource(clickedAlbum.coverArt);
    setTitleSource(clickedAlbum.title);
    setYearSource(clickedAlbum.year);
    setRatingSource(clickedAlbum.rating);
  }

  return (
    <div className="App">
      <section className="main">
        <AlbumCovers onCoverClick={handleTerClick} />
        <DisplayAlbum imageSource={imageSource} titleSource={titleSource} yearSource={yearSource} ratingSource={ratingSource} />
        <Test testProp="suby" />
      </section>
    </div>
  );
}

console.log(AlbumInfo[4].coverArt)
export default App;