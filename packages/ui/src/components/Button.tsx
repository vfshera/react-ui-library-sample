import React, { FC } from "react";

export const Button: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <button className="ui-button">{children}</button>;
};
