import * as React from "react";
import * as Rebass from "rebass/styled-components";

export type Props = {
  className?: string;

  kind?: "light" | "normal" | "solid";
  size?: "small" | "normal" | "large";

  onClick?: React.MouseEventHandler<Element>;

  children?: React.ReactNode;
};

const BasicCard = (props: Props): JSX.Element => {
  const {
    onClick,
    children,
    kind = "basic",
    size = "normal",
    className,
  } = props;

  const sx: Rebass.SxStyleProp = React.useMemo(() => {
    let newSx: Rebass.SxStyleProp = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "nowrap",
      bg: 'frontground',
      
    };

    return newSx;
  }, []);

  return (
    // 이상하게 Card 로 하면 className 넣으면 타입스크립트 에러 뜬다
    <Rebass.Flex as="article" sx={sx} className={className} onClick={onClick}>
      {children}
    </Rebass.Flex>
  );
};

export default BasicCard;
