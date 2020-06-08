import React from "react";

function Rainbow(WrappedContent) {
  const colours = [
    "violet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];

  const randomColour = colours[Math.floor(Math.random() * 5)];

  const className = randomColour + "-text";

  return (props) => {
    return (
      <div className={className}>
        {/* receiving props of wrapped contents with {...props}*/}
        <WrappedContent {...props} />
      </div>
    );
  };
}

export default Rainbow;
