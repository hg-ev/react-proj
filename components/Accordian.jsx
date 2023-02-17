import React, { useState } from "react";

export default function Accordian(props) {
  const { title, data, Component } = props;

  const [open, setOpen] = useState(false);
  const toggleAccordian = () => setOpen((s) => !s);

  return (
    <div className="accordian">
      <div onClick={toggleAccordian}>{title}</div>
      {open && <Component {...data} />}
    </div>
  );
}
