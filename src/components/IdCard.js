export default function IdCard (props) {
    return <div className="card">
        <img src={props.picture} alt={`foto of ${props.firstName} ${props.lastName}`} />
        <div className="card-information">
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}m</p>
            <p>Birth: {props.birth.toDateString()}</p>
        </div>
    </div>
}