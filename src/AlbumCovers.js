import AlbumInfo from "./AlbumInfo";

function AlbumCovers ({ onCoverClick }) {

  const handleCoverClick = (album) => {
    onCoverClick(album);
  };

  return (
    <section className="albumCovers">
      {AlbumInfo.map((album, index) => (
        <img
          key={index}
          onClick={() => handleCoverClick(album)}
          src={`/images/${album.coverArt}`}
          alt=""
        />
      ))}
    </section>
  );
}

export default AlbumCovers;