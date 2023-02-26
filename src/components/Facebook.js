import { Fragment, useState } from 'react';

export default function Facebook({
  img,
  firstName,
  lastName,
  country,
  isStudent,
  isSelected,
}) {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(currState => !currState)
  }
  return (
    <div
      className="facebook-card"
      style={isSelected ? { backgroundColor: '#A3D2E2' } : {}}
      onClick={clickHandler}
    >
      {!clicked ? (
        <img src={img} alt={`${firstName} ${lastName}`} />
      ) : (
        <Fragment>
          <img src={img} alt={`${firstName} ${lastName}`} />
          <div className="card-information">
            <p>
              <strong>First name:</strong> {firstName}
            </p>
            <p>
              <strong>Last name:</strong> {lastName}
            </p>
            <p>
              <strong>Counry:</strong> {country}
            </p>
            <p>
              <strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </Fragment>
      )}
    </div>
  );
}
