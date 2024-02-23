import React from "react";
import Hoc from "./1-HocLogger";

// HocUse.js: Normal Component will HOC
const HocUse = () => {
  return <div>My Component Content</div>;
};

export default Hoc(HocUse);
