import { useState } from "react";
import SignButton from "../../commons/buttons/signButton";
import ErrorMsg from "../../commons/errorMsg/errorMsg";
import Input from "../../commons/inputs/input";
import * as S from "../styles/sign/signPageStyles";
import firebaseApp from "../../../Firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAppSelector } from "../../commons/hooks/useSelector";

const schema = yup.object({
  loginEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  loginPassword: yup
    .string()
    .matches(
      /^[A-Za-z0-9+]{8,16}$/,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호는 필수 입력 사항입니다."),
});

function SignInPage() {
  const reducer = useAppSelector((state) => state);
  console.log(reducer.userReducer);
  const auth = getAuth(firebaseApp);

  const [user, setUser] = useState({});

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== null) {
      setUser(currentUser);
    }
  });

  const onClickLogin = async (data: any) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        data.loginEmail,
        data.loginPassword
      );
    } catch (error: any) {
      console.log(error.message);
    }
  };
  console.log(user, "1");
  return (
    <S.Main>
      <S.Title>SIGN IN</S.Title>
      <S.Form onSubmit={handleSubmit(onClickLogin)}>
        <S.InputWrapper>
          <Input
            type="email"
            register={register("loginEmail")}
            placeholder="이메일을 입력해주세요."
          />
          <ErrorMsg contents={formState.errors.loginEmail?.message} />
        </S.InputWrapper>
        <S.InputWrapper>
          <Input
            type="password"
            register={register("loginPassword")}
            placeholder="비밀번호를 입력해주세요."
          />
          <ErrorMsg contents={formState.errors.loginPassword?.message} />
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
