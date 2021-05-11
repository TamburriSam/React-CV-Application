import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Personal from "./Personal.js";
import Education, { education } from "./Education.js";

import React, { useState } from "react";

var uniqid = require("uniqid");

//used to have personalInfo as parameter, eventually change it back
function EduPrint({ education }) {
  function doSomething(e) {
    e.preventDefault();
  }
  return (
    <ul>
      {education.school.school}

      <button onClick={(e) => doSomething(e)}>Name</button>
    </ul>
  );
}

export default EduPrint;
