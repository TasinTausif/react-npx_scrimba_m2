import markerImg from '../assets/marker.png';

// export default function({img:image, title, country, googleMapsUrl, dates, description}) {
// export default function({object}) {
export default function(props) {
    return (
        <article className="journal-entry">
            {/* <div className="main-image-container">
                <img className="main-image" src={image?.src} alt={image?.alt} />
            </div> */}
            {/* <div className="main-image-container">
                <img className="main-image" src={object?.img?.src} alt={object?.img?.alt} />
            </div> */}
            {/* It's ideal to use prop data with prop and direct variable data directly */}
            {/* <div className="main-image-container">
                <img className="main-image" src={props?.object?.img?.src} alt={props?.object?.img?.alt} />
            </div> */}
            <div className="main-image-container">
                <img className="main-image" src={props?.img?.src} alt={props?.img?.alt} />
            </div>
            <div className="info-container">
                <img className="marker" src={markerImg} alt="map marker icon" />
                <span className="country">{props?.country}</span>
                <a href={props?.googleMapsUrl}>View on Google Maps</a>
                <h2 className="entry-title">{props?.title}</h2>
                <p className="trip-dates">{props?.dates}</p>
                <p className="entry-text">{props?.text}</p>
            </div>
        </article>
    )
}