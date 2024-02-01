import AlbumInfo from "./AlbumInfo";

function AlbumCovers ({ onCoverClick }) {

  const handleCoverClick = (event) => {
    const clickedImageSrc = event.target.src;
    const clickedTitleSrc = event.target.name;
    const clickedYearSrc = event.target.id;
    const clickedRatingSrc = event.target.className;
    onCoverClick(clickedImageSrc, clickedTitleSrc, clickedYearSrc, clickedRatingSrc);
  }

  return (
    <section className="albumCovers">
      {AlbumInfo.map((album, index) => (
        <img
          key={index}
          onClick={handleCoverClick}
          name={album.title}
          id={album.year}
          className={album.rating}
          src={`/images/${album.coverArt}`}
          alt=""
        />
      ))}
    </section>
  );
}

export default AlbumCovers;