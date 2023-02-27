import { Fragment, useState } from 'react';

import SingleColorPicker from './SingleColorPicker';

export default function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const rHandler = (event) => {
    setRValue(event.target.value);
  };

  const gHandler = (event) => {
    setGValue(event.target.value);
  };

  const bHandler = (event) => {
    setBValue(event.target.value);
  };

  return (
    <Fragment>
      <SingleColorPicker color="r" value={rValue} onChange={rHandler} />
      <SingleColorPicker color="g" value={gValue} onChange={gHandler} />
      <SingleColorPicker color="b" value={bValue} onChange={bHandler} />
      <div
        className="color-input"
        style={{
          margin: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <div
          className="box"
          style={{
            backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
            height: '40px',
            width: '40px',
            border: '1px solid black',
          }}
        ></div>
        <p>
          rgb({rValue},{gValue},{bValue})
        </p>
      </div>
    </Fragment>
  );
}
