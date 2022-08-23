import React, { useState } from "react";
import axios from "axios";

function Allforms() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/api/register",
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err + "this is the error"));
  };

  return (
    <>
      <form className="test-form" onSubmit={handleSubmit}>
        <h5>input username here</h5>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {username}

        <h5>input password here</h5>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {password}
        <br />
        <br />
        <button>submit</button>
      </form>
    </>
  );
}

export default Allforms;
