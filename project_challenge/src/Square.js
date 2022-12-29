import React from "react";

const Square = ({ colorValue, hexValue, textColor }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color:
          textColor === "dark" ? "#000" : textColor === "light" ? "#FFF" : null,
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>{" "}
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
