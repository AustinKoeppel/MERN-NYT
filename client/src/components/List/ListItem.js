import React from "react";

export const ListItem = props => (
  <li className="list-group-item articleHeadLine">
    <a href={props.results.web_url}>
      <span className="label label-primary">
        {console.log(props)}
      </span>
      <strong>
        {props.results.headline.main}
      </strong>
    </a>
    <h5>
      {props.results.byline.original}
    </h5>
    <h5>
      {props.results.pub_date}
    </h5>
    <div className={props.buttonType} onClick={() => props.savearticle(props.index)}>
      {props.text}
    </div>
  </li>
);
