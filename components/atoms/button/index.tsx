import * as React from "react";
import * as Rebass from 'rebass/styled-components'

type Props = {
  className: string;

  type: "button" | "reset" | "submit";

  kind: "default" | "rounded";
  size: "small" | "reset" | "large";

  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  children: React.ReactNode;
};

const BasicButton = (props: Props): JSX.Element => {
  const { type, onClick, children, kind, size, className } = props;

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default BasicButton;
