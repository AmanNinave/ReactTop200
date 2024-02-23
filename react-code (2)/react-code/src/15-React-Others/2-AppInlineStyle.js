import React from "react";

const AppInlineStyle = () => {
  return (
    <div>
      <h1 style={inlineStyles.title}>Inline</h1>
    </div>
  );
};

const inlineStyles = {
  title: {
    color: "blue",
    fontSize: "24px",
  },
};

export default AppInlineStyle;

