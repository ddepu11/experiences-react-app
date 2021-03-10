import React from "react";

export default function Button({
  children,
  btnStyle,
  changeExperiemnce,
  index,
}) {
  return (
    <button data-index={index} onClick={changeExperiemnce} className={btnStyle}>
      {children}
    </button>
  );
}
