import React from "react";

export default function Note(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.modified}</p>
      <p>{props.poo}</p>
      <button>Delete Note</button>
    </div>
  );
}
