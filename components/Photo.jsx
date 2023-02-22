import React, { memo } from "react";

function Photo(props) {
  const { title, url } = props
  return <img alt={title} src={url} />;
}

export default memo(Photo)

