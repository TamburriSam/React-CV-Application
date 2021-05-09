import React, { useState } from "react";
var uniqid = require("uniqid");

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
    email: "Email",
    phone: "Phone",
  });

  //next step- figure out where to put the setstates either app or here

  //name
  function displayBlock(e) {
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

  function displayBlockLast(e) {
    setPersonalInfo({
      ...PersonalInfo,
      lastName: {
        display: "block",
        edited: "submit",
      },
    });

    console.log(PersonalInfo);
  }

  function handleInputChange(e, id) {
    e.preventDefault();
    setPersonalInfo({
      ...PersonalInfo,
      name: {
        name: e.target.value,
        edited: "submit",
      },
    });
  }

  function submitHandleChange(e, todo) {
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

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <label>{PersonalInfo.name.name}</label>
        <input
          style={{ display: PersonalInfo.name.display }}
          placeholder={PersonalInfo.name.name}
          onChange={(e) => handleInputChange(e, PersonalInfo.name.id)}
        />

        {/*  <button onClick={(e) => displayBlock(e)}>
          {PersonalInfo.name.edited}
        </button> */}

        {PersonalInfo.name.edited === "edit" ? (
          <button onClick={(e) => displayBlock(e)}>
            {PersonalInfo.name.edited}
          </button>
        ) : (
          <button
            onClick={(e) => submitHandleChange(e, PersonalInfo.name.name)}
          >
            {PersonalInfo.name.edited}
          </button>
        )}
      </div>

      <div>
        <label>{PersonalInfo.lastName.lastName}</label>
        <input
          style={{ display: PersonalInfo.lastName.display }}
          placeholder={PersonalInfo.lastName.lastName}
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={(e) => displayBlockLast(e)}>
          {PersonalInfo.lastName.edited}
          {PersonalInfo.lastName.edited === "edit"
            ? console.log(true)
            : console.log(false)}
        </button>
      </div>

      <div>
        <label>{PersonalInfo.email}</label>
        <button>Edit</button>
      </div>

      <div>
        <label>{PersonalInfo.phone}</label>
        <button>Edit</button>
      </div>
    </form>
  );
}

export default Personal;
