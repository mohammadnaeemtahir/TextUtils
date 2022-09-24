import React, { useState } from "react";
import "./TextForm.css";

export default function TextForm(props) {
  const [text, setText] = useState("");
  return (
    <>
      <h2 className="text-center">{props.heading}</h2>
      <form action="" method="get">
        <div className="row">
          <div className="mb-3">
            <label htmlFor="TextContent" className="form-label"></label>
            <textarea
              name="TextContent"
              id=""
              cols="30"
              rows="10"
              className="form-control"
            ></textarea>
          </div>
        </div>
        <button className="btn btn-primary">Covert to Uppercase</button>
      </form>
    </>
  );
}
