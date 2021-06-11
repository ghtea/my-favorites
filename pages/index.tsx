import Head from "next/head";
import Image from "next/image";

import BasicButton, {
  Props as BasicButtonProps,
} from "components/atoms/Button/BasicButton";

import FormItem from "components/molecules/FormItem";
import LogInForm from "components/organisms/LogInForm";

import * as S from "./index.styled";
import { useMemo } from "react";

export default function Home() {
  const basicButtonOptionList: BasicButtonProps[] = useMemo(() => {
    return [
      { type: "button", kind: "light", size: "small" },
      { type: "button", kind: "light", size: "normal" },
      { type: "button", kind: "light", size: "large" },
      { type: "button", kind: "normal", size: "small" },
      { type: "button", kind: "normal", size: "normal" },
      { type: "button", kind: "normal", size: "large" },
      { type: "button", kind: "solid", size: "small" },
      { type: "button", kind: "solid", size: "normal" },
      { type: "button", kind: "solid", size: "large" },
    ];
  }, []);

  return (
    <div>
      <S.AtomsContainer as="section">
        {/* how to add sx  */}
        {basicButtonOptionList.map((eachBasicButtonProps, index) => (
          <BasicButton
            {...eachBasicButtonProps}
            key={`${eachBasicButtonProps.type}-${eachBasicButtonProps.kind}-${eachBasicButtonProps.size}`}
          >{`Basic Button ${index}`}</BasicButton>
        ))}
      </S.AtomsContainer>

      <S.MoleculesContainer>
        <FormItem
          name="username"
          value=""
          onChange={() => {
            console.log("test");
          }}
        />
      </S.MoleculesContainer>

      <S.OrganismsContainer>
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
      </S.OrganismsContainer>
    </div>
  );
}
