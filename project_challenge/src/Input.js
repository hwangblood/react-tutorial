import React from "react";

import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  toggleTextColor,
  lightOrDark,
  textColor,
  setTextColor,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="colorName">Color Name:</label>

      <input
        type="text"
        name="color_name"
        id="colorName"
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          let hexColor = colorNames(e.target.value);
          console.log(`hexColor: ${hexColor}`);

          // not a color, undefined
          if (!hexColor) return;

          setHexValue(hexColor);

          // Determine if Hex Color is Light or Dark
          const bgColorMode = lightOrDark(hexColor);
          setTextColor(
            bgColorMode === "light"
              ? "dark"
              : bgColorMode === "dark"
              ? "light"
              : null
          );
        }}
      />

      <button
        type="button"
        onClick={() => toggleTextColor()}
        disabled={textColor ? false : true}
      >
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
