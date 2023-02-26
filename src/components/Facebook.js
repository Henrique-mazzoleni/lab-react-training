export default function Facebook ({ img, firstName, lastName, country, isStudent }) {
    return <div className="facebook-card">
        <img src={img} alt={`${firstName} ${lastName}`} />
        <div className="card-information">
            <p><strong>First name:</strong> {firstName}</p>
            <p><strong>Last name:</strong> {lastName}</p>
            <p><strong>Counry:</strong> {country}</p>
            <p><strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}</p>
        </div>
    </div>
}