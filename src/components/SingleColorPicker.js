import { useEffect, useState } from 'react';

export default function SingleColorPicker({ color, value, onChange }) {
  const [RGB, setRGB] = useState([0, 0, 0]);

  useEffect(()=>{
      switch (color) {
        case 'r':
            setRGB([value, 0, 0]);
            break;
        case 'g':
            setRGB([0,value,0]);
            break;
        case 'b':
            setRGB([0,0,value]);
            break;
        default:
            break;
      }
  },[color,value])

  return (
    <div className="color-input" style={{margin: '20px', display: 'flex', alignItems: 'center', gap: '15px'}}>
      <div className="box" style={{backgroundColor: `rgb(${RGB[0]},${RGB[1]},${RGB[2]})`, height: '40px', width: '40px', border: '1px solid black'}}></div>
      <label>
        {color.toUpperCase()}:
        <input type="number" min={0} max={255} step={1} value={value} onChange={onChange} />
      </label>
    </div>
  );
}
