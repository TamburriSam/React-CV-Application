import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import Education from "./Education.js";
import PrintPage from "./PrintPage.js";

var uniqid = require("uniqid");

//eventually move this into app, no need for separate things
function Personal() {
  const [PersonalInfo, setPersonalInfo] = useState({
    id: uniqid(),
    name: {
      name: "First Name",
      id: uniqid(),
      display: "none",
      edited: "edit",
    },
    lastName: {
      lastName: "Last Name",
      id: uniqid(),
      display: "none",
      edited: "edit",
    },
    email: {
      email: "Email",
      id: uniqid(),
      display: "none",
      edited: "edit",
    },
    phone: {
      phone: "Phone",
      id: uniqid(),
      display: "none",
      edited: "edit",
    },
  });

  //next step- figure out where to put the setstates either app or here

  //name
  function displayName(e) {
    e.preventDefault();

    setPersonalInfo({
      ...PersonalInfo,
      name: {
        name: "First Name",
        display: "block",
        edited: "submit",
      },
    });

    console.log(PersonalInfo);
  }

  function displayLastName(e) {
    setPersonalInfo({
      ...PersonalInfo,
      lastName: {
        lastName: "Last Name",
        display: "block",
        edited: "submit",
      },
    });

    console.log(PersonalInfo);
  }

  function displayEmail(e) {
    setPersonalInfo({
      ...PersonalInfo,
      email: {
        email: "Email",
        display: "block",
        edited: "submit",
      },
    });

    console.log(PersonalInfo);
  }

  function displayPhone(e) {
    setPersonalInfo({
      ...PersonalInfo,
      phone: {
        phone: "Phone",
        display: "block",
        edited: "submit",
      },
    });

    console.log(PersonalInfo);
  }

  function handleNameChange(e, id) {
    e.preventDefault();
    setPersonalInfo({
      ...PersonalInfo,
      name: {
        name: e.target.value,
        edited: "submit",
      },
    });
    console.log(e.target.value);
  }

  function handleLastNameChange(e, id) {
    e.preventDefault();
    setPersonalInfo({
      ...PersonalInfo,
      lastName: {
        lastName: e.target.value,
        edited: "submit",
      },
    });
    console.log(e.target.value);
  }

  function handleEmailChange(e, id) {
    e.preventDefault();
    setPersonalInfo({
      ...PersonalInfo,
      email: {
        email: e.target.value,
        edited: "submit",
      },
    });
    console.log(e.target.value);
  }

  function handlePhoneChange(e, id) {
    e.preventDefault();
    setPersonalInfo({
      ...PersonalInfo,
      phone: {
        phone: e.target.value,
        edited: "submit",
      },
    });
    console.log(e.target.value);
  }

  function submitNameChange(e, todo) {
    e.preventDefault();

    setPersonalInfo({
      ...PersonalInfo,
      name: {
        name: todo,
        display: "none",
        edited: "edit",
      },
    });
    console.log("we;re in");
  }

  function submitLastNameChange(e, todo) {
    e.preventDefault();

    setPersonalInfo({
      ...PersonalInfo,
      lastName: {
        lastName: todo,
        display: "none",
        edited: "edit",
      },
    });
    console.log("we;re in");
  }

  function submitEmailChange(e, todo) {
    e.preventDefault();
    let regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (regex.test(PersonalInfo.email.email)) {
      setPersonalInfo({
        ...PersonalInfo,
        email: {
          email: todo,
          display: "none",
          edited: "edit",
        },
      });
    } else {
      alert("invalid email");
    }
  }

  function submitPhoneChange(e, todo) {
    e.preventDefault();

    setPersonalInfo({
      ...PersonalInfo,
      phone: {
        phone: todo,
        display: "none",
        edited: "edit",
      },
    });
    console.log();
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <div>
        <label>{PersonalInfo.name.name}</label>
        <TextField
          style={{ display: PersonalInfo.name.display }}
          placeholder={PersonalInfo.name.name}
          onChange={(e) => handleNameChange(e, PersonalInfo.name.id)}
        />

        {PersonalInfo.name.edited === "edit" ? (
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={(e) => displayName(e, "name")}
          >
            {PersonalInfo.name.edited}
          </Button>
        ) : (
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={(e) => submitNameChange(e, PersonalInfo.name.name)}
          >
            {PersonalInfo.name.edited}
          </Button>
        )}
        <Button variant='outlined' size='small' color='primary'>
          Delete
        </Button>
      </div>

      <div>
        <label>{PersonalInfo.lastName.lastName}</label>
        <input
          style={{ display: PersonalInfo.lastName.display }}
          placeholder={PersonalInfo.lastName.lastName}
          onChange={(e) => handleLastNameChange(e)}
        />

        {PersonalInfo.lastName.edited === "edit" ? (
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={(e) => displayLastName(e)}
          >
            {PersonalInfo.lastName.edited}
          </Button>
        ) : (
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={(e) =>
              submitLastNameChange(e, PersonalInfo.lastName.lastName)
            }
          >
            {PersonalInfo.lastName.edited}
          </Button>
        )}
        <Button variant='outlined' size='small' color='primary'>
          Delete
        </Button>
      </div>

      <div>
        <label>{PersonalInfo.email.email}</label>
        <input
          style={{ display: PersonalInfo.email.display }}
          placeholder={PersonalInfo.email.email}
          onChange={(e) => handleEmailChange(e)}
        />

        {PersonalInfo.email.edited === "edit" ? (
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={(e) => displayEmail(e)}
          >
            {PersonalInfo.email.edited}
          </Button>
        ) : (
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={(e) => submitEmailChange(e, PersonalInfo.email.email)}
          >
            {PersonalInfo.email.edited}
          </Button>
        )}
        <Button variant='outlined' size='small' color='primary'>
          Delete
        </Button>
      </div>

      <div>
        <label>{PersonalInfo.phone.phone}</label>
        <input
          style={{ display: PersonalInfo.phone.display }}
          placeholder={PersonalInfo.phone.phone}
          onChange={(e) => handlePhoneChange(e)}
        />

        {PersonalInfo.phone.edited === "edit" ? (
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={(e) => displayPhone(e)}
          >
            {PersonalInfo.phone.edited}
          </Button>
        ) : (
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={(e) => submitPhoneChange(e, PersonalInfo.phone.phone)}
          >
            {PersonalInfo.phone.edited}
          </Button>
        )}
        <Button variant='outlined' size='small' color='primary'>
          Delete
        </Button>
      </div>
      <Education />
      <PrintPage
        name={PersonalInfo.name.name}
        lastName={PersonalInfo.lastName.lastName}
        phone={PersonalInfo.phone.phone}
        email={PersonalInfo.email.email}
        PersonalInfo={PersonalInfo}
      />
    </form>
  );
}

export default Personal;
