import React, { useState } from "react";

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
        {form ? <div>hi</div> : <div>goodbye</div>}
      </div>
    </>
  );
}

export default Nav;
