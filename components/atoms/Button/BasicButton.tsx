import * as React from "react";
import { Button, SxStyleProp } from "rebass/styled-components";

export type Props = {
  className?: string;

  type?: "button" | "reset" | "submit";

  //shape: "default" | "rounded";
  kind?: "light" | "normal" | "solid";
  size?: "small" | "normal" | "large";

  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  children?: React.ReactNode;
};

const BasicButton = (props: Props): JSX.Element => {
  const {
    type = "button",
    onClick,
    children,
    kind = "basic",
    size = "normal",
    className,
  } = props;

  const sx: SxStyleProp = React.useMemo(() => {
    let newSx: SxStyleProp = {
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "nowrap",
    };

    if (kind === "normal") {
      newSx = {
        ...newSx,
        color: "basic",
        bg: "frontground",
        borderStyle: "solid",
        borderColor: "basic",
        borderWidth: "1px",
      };
    } else if (kind === "solid") {
      newSx = {
        ...newSx,
        color: "frontground",
        bg: "primary",
      };
    } else {
      // light
      newSx = {
        ...newSx,
        color: "primary",
        bg: "transparent",
        borderStyle: "solid",
        borderColor: "primary",
        borderWidth: "2px",
      };
    }

    if (size === "small") {
      newSx = {
        ...newSx,
        fontSize: 0,
        m: 1,
        p: "7px",
      };
    } else if (size === "normal") {
      newSx = {
        ...newSx,
        fontSize: 1,
        m: 2,
        p: "9px",
      };
    } else {
      // large
      newSx = {
        ...newSx,
        fontSize: 2,
        m: 3,
        p: "12px",
      };
    }

    return newSx;
  }, []);

  return (
    <Button sx={sx} className={className} type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default BasicButton;
