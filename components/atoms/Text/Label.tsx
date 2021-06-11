import * as React from "react";
import * as Rebass from "rebass/styled-components";
import { Label as RebassLabel } from "@rebass/forms";

export type Props = {
  className?: string;

  children?: React.ReactNode;
};

const Label = (props: Props): JSX.Element => {
  const { children, className } = props;

  const sx: Rebass.SxStyleProp = React.useMemo(() => {
    let newSx: Rebass.SxStyleProp = {
      fontWeight: 0,
      color: "basic",
    };

    // if (as === "h1") {
    //   newSx = {
    //     ...newSx,
    //     fontSize: "3rem",
    //     p: "1rem",
    //   };
    // } else if (as === "h2") {
    //   newSx = {
    //     ...newSx,
    //     fontSize: "2.4rem",
    //     p: "0.8rem",
    //   };
    // } else {
    //   // h6
    //   newSx = {
    //     ...newSx,
    //     fontSize: "1rem",
    //     p: "0.2rem",
    //   };
    // }

    return newSx;
  }, []);

  return (
    <RebassLabel
      sx={sx}
      className={className}
      // id={idLabel}
      //htmlFor={idInput}
    >
      {children}
    </RebassLabel>
  );
};

export default Label;
