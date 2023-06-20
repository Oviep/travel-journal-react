
// import icon from "./assets/harrods.jpg"

function Journal(props) {
    console.log(props)
  const {image, location, googleMapsUrl, title, startDate, endDate, description} = props.info

    return (
      <main className="container">
        <div className="container-info">
          <img src={image} className="img" />
          <div className="travel-info">
            <div className="travel-location">
              <img src="../src/assets/location-pin.png" className="location-pin"/>
              <h5 className="location">{location}</h5>
              <a href={googleMapsUrl} target="_blank" className="location-link">
                view on google maps
              </a>
            </div>
            <h1 className="title">{title}</h1>
            <h5 className="dates">{startDate}  to {endDate}</h5>
            <p className="travel-text">{description}</p>
          </div>
        </div>
      </main>
    );
}

export default Journal