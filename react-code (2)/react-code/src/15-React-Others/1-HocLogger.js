
import React from "react";

// HocLogger.js: High Order Component
const HocLogger = (HocUse) => {

  return function WithLogger(props) {
    console.log("I am from logger");
    return <HocUse />;
  };

};
export default HocLogger;



