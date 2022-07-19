const Player = () => (
  <>
    <iframe title="playback" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1281648067&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
    <div
      style={{
        fontSize: '10px',
        color: '#cccccc',
        lineBreak: 'anywhere',
        wordBreak: 'normal',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
        fontWeight: '100px',
      }}
    >
      <a
        href="https://soundcloud.com/vinicius-santos-622552247"
        title="Vinicius Santos"
        target="_blank"
        style={{ color: '#cccccc', textDecoration: 'none' }}
        rel="noreferrer"
      >
        Vinicius Santos
      </a>
      {' '}
      ·
      {' '}
      <a
        href="https://soundcloud.com/vinicius-santos-622552247/m83-outro-vs-sweet-disposition-vintage-culture-mashup"
        title="M83 - Outro vs. Sweet Disposition (Vintage Culture Mashup)"
        target="_blank"
        style={{ color: '#cccccc', textDecoration: 'none' }}
        rel="noreferrer"
      >
        M83 - Outro vs. Sweet Disposition (Vintage Culture Mashup)
      </a>
    </div>
  </>
);

export default Player;
