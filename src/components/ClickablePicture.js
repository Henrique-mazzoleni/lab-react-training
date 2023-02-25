import { Fragment, useState } from 'react';

export default function ClickablePicture(props) {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked((currState) => !currState);
  };

  return (
    <Fragment>
      {clicked ? (
        <img src={props.imgClicked} alt="clicked" onClick={clickHandler} />
      ) : (
        <img src={props.img} alt="normal" onClick={clickHandler} />
      )}
    </Fragment>
  );
}
