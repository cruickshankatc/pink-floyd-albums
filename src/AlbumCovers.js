function AlbumCovers ({ onCoverClick }) {

  const handleCoverClick = (event) => {
    const clickedImageSrc = event.target.src;
    onCoverClick(clickedImageSrc);
  }

  return (
    <section className="albumCovers">
      <img onClick={handleCoverClick} src="/images/piper.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/asaucerfulofsecrets.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/more.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/ummagumma.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/atomheartmother.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/meddle.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/obscuredbyclouds.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/thedarksideofthemoon.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/wishyouwerehere.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/animals.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/thewall.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/thefinalcut.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/amomentarylapseofreason.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/thedivisionbell.jpg" alt="" />
      <img onClick={handleCoverClick} src="/images/theendlessriver.jpg" alt="" />
    </section>
  );
}

export default AlbumCovers;