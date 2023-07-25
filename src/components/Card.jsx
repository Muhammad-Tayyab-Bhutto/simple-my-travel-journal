import { FaMapMarkerAlt } from "react-icons/fa";
const Card = (props) => {
  return (
    <div className="card">
      <img className="card-image" src={props.item.image} />
      <div className="card-items">
        <h3 className="map-logo">
          <FaMapMarkerAlt />

          <a href={props.item.googleMapsUrl}> {props.item.location} View On Google Maps</a>
        </h3>
        <h1 className="card-title">{props.item.title}</h1>
        <h3>
          {props.item.startDate} - {props.item.endDate}
        </h3>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default Card;
