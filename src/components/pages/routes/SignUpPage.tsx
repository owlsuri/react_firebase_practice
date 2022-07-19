import React from "react";
import * as S from "../styles/signUp/signUpstyles";
import Input from "../../commons/inputs/input";
import SignButton from "../../commons/buttons/signButton";
import ErrorMsg from "../../commons/errorMsg/errorMsg";

function SignUpPage() {
  return (
    <div>
      <S.Main>
        <S.Title>SIGN UP</S.Title>
        <form>
          <S.InputWrapper>
            <Input type="email" placeholder="이메일을 입력해주세요" />
            <ErrorMsg contents="올바른 이메일을 입력해주세요" />
          </S.InputWrapper>
          <S.InputWrapper>
            <Input type="password" placeholder="비밀번호를 입력해주세요" />
            <ErrorMsg contents="올바른 이메일을 입력해주세요" />
          </S.InputWrapper>
          <S.InputWrapper>
            <Input type="text" placeholder="닉네임을 입력해주세요" />
            <ErrorMsg contents="올바른 이메일을 입력해주세요" />
          </S.InputWrapper>
          <S.SignInWrapper>
            <div>이미 회원이신가요?</div>
            <div>로그인하러가기</div>
          </S.SignInWrapper>
          <div>
            <SignButton contents="회원가입" />
          </div>
        </form>
      </S.Main>
    </div>
  );
}

export default SignUpPage;
