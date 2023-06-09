import React, { useState } from "react";
import styled from "styled-components";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";
import { useNavigate } from "react-router-dom";
import Hooks from "../../../lib/Hooks";
import Article from "../../atoms/layouts/Article";

type Props = {};

function RegisterPanel({}: Props) {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfrim, setPwConfrim] = useState("");

  const register: () => void = () => {
    if (pw !== pwConfrim) {
      alert("비밀번호가 맞지 않아요...");
      setPw("");
      setPwConfrim("");
      return;
    }
    Hooks.chkEmailDuplicate(inputEmail).then((res) => {
      if (res.status === 200) {
        Hooks.register(inputEmail, pw).then((res) => {
          if (res.status === 201) {
            navigate("/login");
          }
        });
      } else {
        alert("이미 등록된 이메일이 있어요...");
      }
    });
  };

  return (
    <Article>
      <Section>
        <Text color="pink" fontSize="large">
          회원가입'^'
        </Text>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <SpaceAroundCol gap="30px">
            <Input
              type="email"
              value={inputEmail}
              setValue={setInputEmail}
              placeholder="Email"
              width="600px"
            />
            <Input
              type="password"
              value={pw}
              setValue={setPw}
              placeholder="PW"
              width="600px"
            />
            <Input
              type="password"
              value={pwConfrim}
              setValue={setPwConfrim}
              placeholder="PW"
              width="600px"
            />
            <Button width="600px" onClick={register}>
              로그인
            </Button>
          </SpaceAroundCol>
        </form>
      </Section>
    </Article>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default RegisterPanel;
