import { useState } from "react";

import Input from "./Input";
import Square from "./Square";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [textColor, setTextColor] = useState("");
  const toggleTextColor = () =>
    textColor === "light"
      ? setTextColor("dark")
      : textColor === "dark"
      ? setTextColor("light")
      : setTextColor(null);

  const lightOrDark = (color) => {
    let r, g, b, hsp;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
      // If HEX --> store the red, green, blue values in separate variables
      color = color.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );

      r = color[1];
      g = color[2];
      b = color[3];
    } else {
      // If RGB --> Convert it to HEX: http://gist.github.com/983661
      color = +(
        "0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
      );

      r = color >> 16;
      g = (color >> 8) & 255;
      b = color & 255;
    }

    // HSP equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
      return "light";
    } else {
      return "dark";
    }
  };

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        textColor={textColor}
      />

      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        toggleTextColor={toggleTextColor}
        lightOrDark={lightOrDark}
        textColor={textColor}
        setTextColor={setTextColor}
      />
    </div>
  );
}

export default App;
