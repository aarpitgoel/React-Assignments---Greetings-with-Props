// write code for Welcome component here
import React from "react";

export default function Welcome(props) {
  const name = props.name;
  return (
    <>
      <div>
        "Hey !" + <h1>{name}</h1>
      </div>
      <h2>"Welcome to Newton School."</h2>
    </>
  );
}
