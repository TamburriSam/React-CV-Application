import React, { useState } from "react";
import Personal from "./Personal.js";
import EduPrint from "./EduPrint.js";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

var uniqid = require("uniqid");

function Work() {
  const [work, setWork] = useState({
    id: uniqid(),
    jobs: [],
    display: "none",
    //graduated will be a toggle of date graduated? if toggled- display an input w date grad
    details: {
      graduated: false,
      edited: "edit",
      employer: "Employer",
      title: "Title",
      startDate: "Start Date",
      endDate: "End Date",
    },
  });

  const showInput = (e) => {
    setWork({
      ...work,
      display: "block",
    });
  };

  const changeEmployer = (e) => {
    setWork({
      ...work,
      details: {
        employer: e.target.value,
      },
    });
  };

  const submitChange = (e) => {
    e.preventDefault();
    setWork({
      work: {
        jobs: [9],
      },
    });
  };

  return (
    <div>
      <div>
        <h4>{work.details.employer}</h4>
        <input
          onChange={(e) => changeEmployer(e)}
          style={{ display: work.display }}
        ></input>
      </div>

      <div>
        <h4>{work.details.title}</h4>
        <input style={{ display: work.display }}></input>
      </div>

      <div>
        <h4>{work.details.startDate}</h4>
        <input style={{ display: work.display }} />
      </div>

      <div>
        <h4>{work.details.endDate}</h4>
        <input style={{ display: work.display }} />
      </div>

      {/* this button just symbolizes what everything will do  */}
      <button onClick={submitChange}>submit?</button>
      <Button onClick={showInput}>Edit Work</Button>
    </div>
  );
}

export default Work;
