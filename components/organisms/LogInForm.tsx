import * as React from "react";
import { Flex, SxStyleProp } from "rebass/styled-components";
import Label from "components/atoms/Text/Label";
import FormItem, {Props as FormItemProps} from "components/molecules/FormItem";

export type Props = {
  className?: string;

  formItemData1: FormItemProps;
  formItemData2: FormItemProps;
};

const LogInForm = (props: Props): JSX.Element => {
  const { className, formItemData1, formItemData2 } = props;

  const sx: SxStyleProp = React.useMemo(() => {
    let newSx: SxStyleProp = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    };

    return newSx;
  }, []);

  return (
    <Flex sx={sx} className={className}>
      <FormItem {...formItemData1} />
      <FormItem {...formItemData2} />
    </Flex>
  );
};

export default LogInForm;
