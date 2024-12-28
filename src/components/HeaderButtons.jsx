import React from "react";

const HeaderButtons = () => {
  const buttons = [
    { label: "Fund name", show: "flex" },
    { label: "GP name", show: "hidden sm:flex" },
    { label: "Sub. amount", show: "flex" },
    { label: "Sub. period", show: "flex" },
    { label: "Carry", show: "hidden md:flex" },
    { label: "Mgmt fee", show: "hidden lg:flex" },
    { label: "Tags", show: "hidden xl:flex" },
  ];


  return (
    <div className="sticky text-sm top-0 z-10">
      <div className=" grid items-center text-gray-500 bg-white grid-cols-[1fr_90px_90px] sm:grid-cols-[2fr_repeat(3,1fr)] md:grid-cols-[2fr_repeat(4,1fr)] lg:grid-cols-[2fr_1.5fr_repeat(4,1fr)] xl:grid-cols-[2fr_1.5fr_repeat(5,1fr)]">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`group relative z-10 select-none items-center gap-2 border-b py-3 pr-4 text-body-200 ${button.show} text-text70 hover:text-primary cursor-pointer border-transparent flex`}
          >
            {button.label}
          </button>
        ))}
      </div>
      <hr className="w-full" />
    </div>
  );
};

export default HeaderButtons;
