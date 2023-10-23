import React, { ReactElement } from "react";
import classes from "./ToolTipComponent.module.css";

type PropsType = {
  children: ReactElement;
  text: string;
};

const ToolTipComponent: React.FC<PropsType> = ({ children, text }) => {
  return (
    <div className={classes.container}>
      {children}
      <div className={classes.tooltip}>{text}</div>
    </div>
  );
};

export default ToolTipComponent;
