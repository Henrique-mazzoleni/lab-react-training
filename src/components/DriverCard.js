import Rating from "./Rating"

export default function Drivercard (props) {
    return <div className="driver-card">
        <img src={props.img} alt={`${props.name}`} />
        <div className="review">
            <h3>{props.name}</h3>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    </div>
}