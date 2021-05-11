import React, { useState } from "react";
import Printpage from "./Printpage.js";
import Personal from "./Personal.js";
import Final from "./Final.js";

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
    <div>
      <h1>{education.school.school}</h1>
      <Personal education={education} />
    </div>
  );
}

export default Education;
