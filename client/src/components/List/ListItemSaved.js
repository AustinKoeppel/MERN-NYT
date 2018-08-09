import React from "react";

export const ListItemSaved = props => (
  <li className="list-group-item articleHeadLine">
    <span className="label label-primary">
      {console.log(props)}
    </span>
    <strong>
        <a href={props.results.url}>
            {props.results.title}
        </a>
    </strong>
    <h5>
      {props.results.date}
    </h5>
    <div className={props.buttonType} onClick={() => props.deletearticle(props.index)}>
      {props.text}
    </div>
  </li>
);