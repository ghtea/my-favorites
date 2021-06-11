import * as React from "react";
import * as Rebass from "rebass/styled-components";
import { Input } from "@rebass/forms";

export type Props = {
  className?: string;

  children?: React.ReactNode;

  name: string;
  value: string | number | readonly string[] | undefined;

  placeholder?: string;
  required: boolean;

  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  onKeyPress?:
    | ((event: React.KeyboardEvent<HTMLInputElement>) => void)
    | undefined;
};

const TextInput = (props: Props): JSX.Element => {
  const {
    className,
    children,
    name,
    value,
    placeholder,
    required,
    onChange,
    onKeyPress,
  } = props;

  const sx: Rebass.SxStyleProp = React.useMemo(() => {
    let newSx: Rebass.SxStyleProp = {};

    return newSx;
  }, []);

  return (
    // 이상하게 Card 로 하면 className 넣으면 타입스크립트 에러 뜬다
    <Input
      type="text"
      sx={sx}
      className={className}
      name={name}
      value={value}
      //id={idInput}
      //aria-labelledby={idLabel}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      onKeyPress={onKeyPress}
    >
      {children}
    </Input>
  );
};

export default TextInput;
