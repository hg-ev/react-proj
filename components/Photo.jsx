import React from "react";

export default function Photo(props) {
  return (
    <>
      <img alt={props.title} src={props.url} />
    </>
  );
}
