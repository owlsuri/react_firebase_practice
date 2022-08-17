import React from "react";
import * as S from "../styles/sign/signPageStyles";
import Input from "../../commons/inputs/input";
import SignButton from "../../commons/buttons/signButton";
import ErrorMsg from "../../commons/errorMsg/errorMsg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import firebaseApp from "../../../Firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup
    .string()
    .min(2, "이름은 2자리 이상 입력해 주세요.")
    .max(10, "10자 이내로 입력해주세요.")
    .required("이름은 필수 입력 사항입니다."),
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .matches(
      /^[A-Za-z0-9+]{8,16}$/,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호는 필수 입력 사항입니다."),
});

function SignUpPage() {
  const navigate = useNavigate();

  const auth = getAuth(firebaseApp);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data: any) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const currentUser = auth.currentUser;
      if (currentUser !== null) {
        const profile = await updateProfile(currentUser, {
          displayName: data.name,
        });

        console.log(user);
        console.log(profile);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <S.Main>
      <S.Title>SIGN UP</S.Title>
      <S.Form onSubmit={handleSubmit(onClickSignUp)}>
        <S.InputWrapper>
          <Input
            type="email"
            register={register("email")}
            placeholder="이메일을 입력해주세요."
          />
          <ErrorMsg contents={formState.errors.email?.message} />
        </S.InputWrapper>
        <S.InputWrapper>
          <Input
            type="password"
            register={register("password")}
            placeholder="비밀번호를 입력해주세요."
          />
          <ErrorMsg contents={formState.errors.password?.message} />
        </S.InputWrapper>
        <S.InputWrapper>
          <Input
            type="text"
            register={register("name")}
            placeholder="닉네임을 입력해주세요."
          />
          <ErrorMsg contents={formState.errors.name?.message} />
        </S.InputWrapper>
        <S.SignInWrapper>
          <S.SignInInfo>이미 회원이신가요?</S.SignInInfo>
          <S.SignInLink
            onClick={() => {
              navigate("/signIn");
            }}
          >
            로그인하러가기
          </S.SignInLink>
        </S.SignInWrapper>
        <S.SignUpBtnWrapper>
          <SignButton contents="회원가입" />
        </S.SignUpBtnWrapper>
      </S.Form>
    </S.Main>
  );
}

export default SignUpPage;
