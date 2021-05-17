import React, { useState } from "react";
import Personal from "./Personal.js";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

var uniqid = require("uniqid");

function Education({ widgets, deleteWidget }) {
  const [education, setEducation] = useState({
    id: uniqid(),
    //graduated will be a toggle of date graduated? if toggled- display an input w date grad
    graduated: false,
    display: "none",
    edited: "edit",
    count: 0,
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

  const showInput = (e) => {
    setEducation({
      ...education,
      display: "block",
      edited: "submit",
    });
  };

  const changeDegree = (e) => {
    setEducation({
      ...education,
      degree: {
        degree: e.target.value,
      },
    });
  };

  const changeMajor = (e) => {
    setEducation({
      ...education,
      major: {
        major: e.target.value,
      },
    });
  };

  const changeDateStart = (e) => {
    setEducation({
      ...education,
      datestart: {
        datestart: e.target.value,
      },
    });
  };

  const changeSchool = (e, item) => {
    setEducation({
      ...education,
      school: {
        school: e.target.value,
      },
    });
    console.log(widgets);
  };

  const submitChange = (e) => {
    e.preventDefault();

    setEducation({
      ...education,
      display: "none",
      edited: "edit",
    });
  };

  return (
    /* might want to make this a form and have an onchange handler that modifies the state of the objects */
    <form
      id={widgets.length}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>
        <label> {education.school.school} </label>
        <TextField
          onChange={(e) => changeSchool(e)}
          style={{ display: education.display }}
        />
      </div>

      <div>
        {education.degree.degree}
        <input
          onChange={(e) => changeDegree(e)}
          style={{ display: education.display }}
          placeholder={education.degree.degree}
        ></input>
      </div>

      <div>
        {education.major.major}
        <input
          onChange={(e) => changeMajor(e)}
          style={{ display: education.display }}
        ></input>
      </div>

      <div>
        {education.datestart.datestart}
        <input
          onChange={(e) => changeDateStart(e)}
          style={{ display: education.display }}
        ></input>
      </div>

      {education.edited === "edit" ? (
        <Button
          variant='outlined'
          size='small'
          color='primary'
          onClick={showInput}
        >
          {education.edited}
        </Button>
      ) : (
        <Button
          variant='outlined'
          size='small'
          color='primary'
          onClick={(e) => submitChange(e)}
        >
          {education.edited}
        </Button>
      )}

      <div>
        <Button
          id={widgets.length}
          onClick={(e) => deleteWidget(e)}
          variant='outlined'
          size='small'
          color='primary'
        >
          Delete
        </Button>
      </div>
    </form>
  );
}

export default Education;
