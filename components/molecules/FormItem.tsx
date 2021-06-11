import * as React from "react";
import { Box, SxStyleProp } from "rebass/styled-components";
import Label from "components/atoms/Text/Label";
import TextInput from "components/atoms/Forms/TextInput";

export type Props = {
  className?: string;
  children?: React.ReactNode;

  name: string;
  value: string | number | readonly string[] | undefined;
  required?: boolean;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
};

const FormItem = (props: Props): JSX.Element => {
  const { children, className, name, value, required = true, onChange } = props;

  const sx: SxStyleProp = React.useMemo(() => {
    let newSx: SxStyleProp = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',

    };

    return newSx;
  }, []);

  return (
    <Box sx={sx} className={className}>
      <Label>{name}</Label>
      <TextInput
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      ></TextInput>
    </Box>
  );
};

export default FormItem;
