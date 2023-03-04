import React from "react";

export default function ChevronDoubleLeft({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      className="bi bi-chevron-double-left"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
      <path
        fillRule="evenodd"
        d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
}
