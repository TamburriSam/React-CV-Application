import React, { useState } from "react";
import Personal from "./Personal.js";
import EduPrint from "./EduPrint.js";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

var uniqid = require("uniqid");

function Education() {
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
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <label> {education.school.school} </label>
        <TextField
          style={{ display: education.school.display }}
          placeholder={education.school.school}
          onChange={{}}
        />
      </div>
      <div>{education.degree.degree}</div>
      <div>{education.major.major}</div>
      <div>{education.datestart.datestart}</div>
    </div>
  );
}

export default Education;
