import SwitchDisplay from './SwitchDisplay';

function DisplayAlbum() {
  return (
    <section className="displayAlbum">
      <img onClick={SwitchDisplay} id="displayImage" src="/images/thewall.jpg" alt=""/>
    </section>
  ) 
}

export default DisplayAlbum;