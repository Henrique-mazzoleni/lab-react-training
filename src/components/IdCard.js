export default function IdCard (props) {
    return <div className="id-card">
        <img src={props.picture} alt={`foto of ${props.firstName} ${props.lastName}`} />
        <div className="card-information">
            <p><strong>First name:</strong> {props.firstName}</p>
            <p><strong>Last name:</strong> {props.lastName}</p>
            <p><strong>Gender:</strong> {props.gender}</p>
            <p><strong>Height:</strong> {props.height}m</p>
            <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
        </div>
    </div>
}