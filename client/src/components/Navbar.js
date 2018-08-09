import React from "react";

let styler = {
    "background-color": "#20315A",
    "color": "white"
}

const Navbar = () => (
    <div className="jumbotron" style={styler}>
      <h1 className="text-center">
        <strong>
          <i className="fa fa-newspaper-o"></i> New York Times Search</strong>
      </h1>
    </div>
);

export default Navbar