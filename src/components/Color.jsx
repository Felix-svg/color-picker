import { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <div className="color-picker">
      <div style={{ background: color }} className="color-background">
        {color}
      </div>
      <label style={{color:"black"}}>Pick a color </label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
