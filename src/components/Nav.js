import React, { useState } from "react";
import Allforms from "./Allforms";
import Form from "./Form";

function Nav() {
  const [form, setForm] = useState(true);
  console.log(form);

  const formTab = {
    backgroundColor: form ? "rgb(77, 77, 77)" : "rgb(104, 104, 104)",
  };
  const formTabTwo = {
    backgroundColor: !form ? "rgb(77, 77, 77)" : "rgb(104, 104, 104)",
  };

  return (
    <>
      <div className="nav-outer">
        <div className="nav-top">
          <div
            className="nav-create-form"
            onClick={() => setForm(true)}
            style={formTab}
          >
            Create form
          </div>
          <div
            className="nav-view-forms"
            onClick={() => setForm(false)}
            style={formTabTwo}
          >
            View forms
          </div>
        </div>
        {form ? (
          <div>
            <Form />
          </div>
        ) : (
          <div>
            <Allforms />
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;
