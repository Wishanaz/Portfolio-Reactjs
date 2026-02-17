import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = () => {
  return (
    <MacWindow width='2vw'>
      <div className="spotify-window">
        <h3 className="spotify-title">Spotify--- Wisha/playlist</h3>
        <hr />

        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZEVXbNG2KDcFcKOF?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  )
}

export default Spotify
