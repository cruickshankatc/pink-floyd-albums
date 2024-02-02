function DisplayAlbum({ imageSource, titleSource, yearSource, ratingSource }) {
  return (
    <section className="displayAlbum">
      <img id="displayImage" src={`/images/${imageSource}`} alt={imageSource} />
      <span>{titleSource}</span>
      <span>{yearSource}</span>
      <span>{ratingSource}</span>
    </section>
  ) 
}

export default DisplayAlbum;