import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="card-body">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
