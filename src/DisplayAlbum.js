function DisplayAlbum({ imageSource }) {
  return (
    <section className="displayAlbum">
      <img id="displayImage" src={imageSource} alt="" />
    </section>
  ) 
}

export default DisplayAlbum;