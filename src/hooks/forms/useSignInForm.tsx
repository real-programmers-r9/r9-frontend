import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { REGEXP_PASSWORD } from "~/constants/regexp";
import { SignInForm } from "~/types/forms";

export const useSignInForm = () =>
  useForm<SignInForm>({
    resolver: yupResolver(
      yup.object().shape({
        email: yup
          .string()
          .email("이메일 형식으로 입력해주세요!")
          .required("이메일을 입력해주세요!"),
        password: yup
          .string()
          .matches(
            REGEXP_PASSWORD,
            "비밀번호는 영문 대소문자, 숫자, 특수문자를 모두 포함하여 8글자 이상이여야합니다!"
          )
          .required("비밀번호를 입력해주세요!"),
      })
    ),
  });
