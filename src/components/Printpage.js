import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Personal from "./Personal.js";
import Education, { education } from "./Education.js";

import React, { useState } from "react";

var uniqid = require("uniqid");

//used to have personalInfo as parameter, eventually change it back
function PrintPage({ PersonalInfo }) {
  const [education, setEducation] = useState({
    id: uniqid(),
    //graduated will be a toggle of date graduated? if toggled- display an input w date grad
    graduated: false,
    school: {
      school: "School",
      id: uniqid(),
      display: "none",
    },
    degree: {
      degree: "Degree",
      id: uniqid(),
      display: "none",
    },
    major: {
      major: "Major",
      id: uniqid(),
      display: "none",
    },
    datestart: {
      datestart: "Date Started",
      id: uniqid(),
      display: "none",
    },
    anticipated: {
      anticipated: "Anticipated",
      id: uniqid(),
      display: "none",
    },
    dateend: {
      dateend: "Date End",
      id: uniqid(),
      display: "none",
    },
  });
  function doSomething(e) {
    e.preventDefault();
  }
  return (
    <div style={{ border: "black 2px solid" }}>
      <h1>Print Preview</h1>
      {PersonalInfo.name.name}
      <br></br>
      {PersonalInfo.lastName.lastName}
      <br></br>
      {education.school.school}
      <br></br>
      {education.degree.degree}
    </div>
  );
}

export default PrintPage;
