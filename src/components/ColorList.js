import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const listColors = colors.map(color => <li style = {{color: color}} key={color}>{color}</li>)

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {listColors}
      </ol>
    </div>
  );
}

export default ColorList;
