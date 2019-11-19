import React from "react";
import { Link } from "react-router-dom";

export default function Note( props ) {

  console.log( props )
  return props.showContent
    ? ( <div className="note">
      <Link to={`/note/${ props.id }`}>
        <h2>{props.name}</h2>
      </Link>
      <p>{props.content}</p>
      <p>{props.modified}</p>
      <button>Delete Note</button>
    </div> )
    : ( <div className="note">
      <Link to={`/note/${ props.id }`}>
        <h2>{props.name}</h2>
      </Link>
      <p>{props.modified}</p>
      <button>Delete Note</button>
    </div> );
}
