function DisplayAlbum({ imageSource, titleSource, yearSource, ratingSource }) {
  return (
    <section className="displayAlbum">
      <img id="displayImage" src={imageSource} alt="" />
      <span>{titleSource}</span>
      <span>{yearSource}</span>
      <span>{ratingSource}</span>
    </section>
  ) 
}

export default DisplayAlbum;