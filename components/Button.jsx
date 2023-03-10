import React, { memo } from "react";

function Button(props) {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
}

export default memo(Button);
