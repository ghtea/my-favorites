import * as React from "react";
import * as Rebass from "rebass/styled-components";

export type Props = {
  className?: string;

  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  children?: React.ReactNode;
};

const Heading = (props: Props): JSX.Element => {
  const { children, as, className } = props;

  const sx: Rebass.SxStyleProp = React.useMemo(() => {
    let newSx: Rebass.SxStyleProp = {};

    if (as === "h1") {
      newSx = {
        ...newSx,
        fontSize: "3rem",
        p: "1rem",
      };
    } else if (as === "h2") {
      newSx = {
        ...newSx,
        fontSize: "2.4rem",
        p: "0.8rem",
      };
    } else if (as === "h3") {
      newSx = {
        ...newSx,
        fontSize: "1.8rem",
        p: "0.6rem",
      };
    } else if (as === "h4") {
      newSx = {
        ...newSx,
        fontSize: "1.2rem",
        p: "0.4rem",
      };
    } else if (as === "h5") {
      newSx = {
        ...newSx,
        fontSize: "1rem",
        p: "0.2rem",
      };
    } else {
      // h6
      newSx = {
        ...newSx,
        fontSize: "1rem",
        p: "0.2rem",
      };
    }

    return newSx;
  }, []);

  return (
    // 이상하게 Card 로 하면 className 넣으면 타입스크립트 에러 뜬다
    <Rebass.Heading as={as} sx={sx} className={className}>
      {children}
    </Rebass.Heading>
  );
};

export default Heading;
