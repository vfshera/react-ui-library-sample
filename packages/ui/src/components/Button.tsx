import React, { FC } from "react";

export const Button: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      onClick={() => alert("UI Button Clicked!")}
      className="ui-button"
      style={{
        padding: "20px 50px",
        background: "#111",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};
