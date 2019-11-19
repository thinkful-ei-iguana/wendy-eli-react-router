import React from "react";
import SidebarItem from "./SidebarItem";
import { Route } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar(props) {
  let folderList = props.folders.map(folder => {
    return (
      <Route
        path={folder.id}
        render={folder => (
          <SidebarItem key={folder.id} id={folder.id} name={folder.name} />
        )}
      />
    );
  });
  return (
    <div>
      <ul className="Folder-list">{folderList}</ul>
      <button className="Add-folder">Add folder</button>
    </div>
  );
}
