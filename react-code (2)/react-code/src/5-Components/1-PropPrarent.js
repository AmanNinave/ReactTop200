import React, { useState } from "react";
import PropChild from "./1-PropChild";

function PropParent() {
  return (
    <div>
      <PropChild message={'data'} />
    </div>
  );
}
export default PropParent;

