import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Personal from "./Personal.js";
import React, { useState } from "react";

function Final({ education }) {
  function doSomething(e) {
    e.preventDefault();
    console.log(education.school.school);
  }
  return (
    <ul>
      <button onClick={(e) => doSomething(e)}>Education</button>
    </ul>
  );
}

export default Final;
