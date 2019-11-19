import React from "react";
import SidebarItem from "./SidebarItem";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar( props ) {
  console.log( props )

  let folderList = props.folders.map( folder => {

    return ( <li key={folder.id}>
      <NavLink to={`/folder/${ folder.id }`}>
        <SidebarItem id={folder.id} name={folder.name}/>
      </NavLink>
    </li> );
  } );

  return ( <div>
    <ul className="Folder-list">{folderList}</ul>
    <button className="Add-folder">Add folder</button>
  </div> );
}
