import React from "react";
import SignButton from "../../commons/buttons/signButton";
import ErrorMsg from "../../commons/errorMsg/errorMsg";
import Input from "../../commons/inputs/input";
import * as S from "../styles/sign/signPageStyles";

function SignInPage() {
  return (
    <S.Main>
      <S.Title>SIGN IN</S.Title>
      <S.Form>
        <S.InputWrapper>
          <Input type="email" placeholder="이메일을 입력해주세요." />
          <ErrorMsg contents="올바른 이메일을 입력해주세요." />
        </S.InputWrapper>
        <S.InputWrapper>
          <Input type="password" placeholder="비밀번호를 입력해주세요." />
          <ErrorMsg contents="비밀번호가 올바르지 않습니다." />
        </S.InputWrapper>
        <S.SignInWrapper>
          <S.SignInInfo>아직 회원이 아니신가요?</S.SignInInfo>
          <S.SignInLink>회원가입하러가기</S.SignInLink>
        </S.SignInWrapper>
        <S.SignUpBtnWrapper>
          <SignButton contents="로그인" />
        </S.SignUpBtnWrapper>
      </S.Form>
    </S.Main>
  );
}

export default SignInPage;
