import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="Dark"
      img="https://cdn.wallpapersafari.com/17/46/xPN3BZ.jpg"
      tel="+129 456 852"
      email="Google.com"
    />
  </div>,
  document.getElementById("root")
);
