import React from "react";

const Highlight = ({ children }) => {
  return (
    <span style={{ backgroundColor: "#DDD", borderRadius: 5, padding: 5 }}>
      {children}
    </span>
  );
};
export default Highlight;
