import React from "react";
import close from "../assets/icon/Icon@2x.svg";

function Reminder() {
  return (
    <div
      className="relative"
      style={{
        width: "1060px",
        height: "120px",
        border: "solid 1px #d0d5dd ",
        borderRadius: "8px",
      }}
    >
      <button
        className="absolute p-0"
        style={{
          width: "12px",
          height: "12px",
          top: "6px",
          right: "6px",
          border: "solid 2px transparent",
          opacity: "1",
        }}
      >
        <img src={close} alt="Close" className="w-full h-full" />
      </button>
      <div
        className="grid grid-rows-2"
        style={{ paddingTop: "18px", paddingLeft: "16px" }}
      >
        <div>
          <h3 className="font-sans-serif text-2xl font-semibold leading-8 tracking-tight text-left">
            Welcome back, John Doe
          </h3>
        </div>
        <div className="font-inter text-base font-normal leading-6 text-left text-[#757575]">
          The end of the year is coming. Are you planning your performance
          interviews? You can do this super efficiently with Acmy.
          <br />
          <a href="#" className=" text-[#BC006D] hover:underline">
            Look here for more information
          </a>
        </div>
      </div>
    </div>
  );
}

export default Reminder;
