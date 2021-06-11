import FormItem from "components/molecules/FormItem";
import LogInForm from "components/organisms/LogInForm";

import * as S from "./index.styled";
import { useMemo } from "react";

export default function Home() {
  return (
    <S.RootContainer>
      <LogInForm
        formItemData1={{
          name: "username",
          value: "",
          onChange: () => {
            console.log("test");
          },
        }}
        formItemData2={{
          name: "fullname",
          value: "",
          onChange: () => {
            console.log("test");
          },
        }}
      />
    </S.RootContainer>
  );
}
