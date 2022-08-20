import React, { useState } from "react";
import Allforms from "./Allforms";
import Form from "./Form";

function Nav() {
  const [form, setForm] = useState(true);
  console.log(form);

  return (
    <>
      <div className="nav-outer">
        <div className="nav-top">
          <div className="nav-create-form" onClick={() => setForm(true)}>
            Create form
          </div>
          <div className="nav-view-forms" onClick={() => setForm(false)}>
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
