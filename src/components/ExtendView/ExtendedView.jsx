import React from "react";
import "react-responsive-modal/styles.css";
import "./customOverlay.css";

const CloseIcon = () => (
  <div className="absolute top-0 p-1 right-0">
    <svg
      width="30"
      height="30"
      fill="#fff"
      class="bi bi-x-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  </div>
);

export default function ExtendedView({ file, type, open, onClose }) {
  console.log(type);
  return (
    <div className="h-screen w-screen absolute top-0 left-0 z-30">
      <div
        className="h-screen w-screen absolute customOverlay top-0 left-0 z-30"
        onClick={onClose}
      ></div>
      <div className="absolute top-1 right-2 z-50" onClick={onClose}>
        <CloseIcon />
      </div>
      <div className="z-50   bg-white absolute center flex justify-center items-center">
         {
            type=='image'?
            <img className=" max-h-[90vh]  max-w-[90vw]  p-2" src={URL.createObjectURL(file)} />
            :
            <video className="max-h-[90vh] max-w-[90vw]  p-2" controls>
                <source src={URL.createObjectURL(file)} />
            </video>
         }
      </div>
    </div>
  );
}
