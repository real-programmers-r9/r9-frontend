import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormProps } from "react-hook-form";
import * as yup from "yup";
import { REGEXP_PASSWORD } from "~/constants/regexp";
import { SignUpForm } from "~/types/forms";
import { Gender, Role } from "~/types/user";

export interface EditProfileForm extends Partial<SignUpForm> {
  profileImage?: FileList | string;
}

export const useEditProfileForm = (props: UseFormProps) =>
  useForm<EditProfileForm>({
    resolver: yupResolver(
      yup.object().shape({
        role: yup
          .mixed<Role>()
          .oneOf(Object.values(Role), "유형이 일치하지 않습니다."),
        name: yup.string().max(10, "이름은 최대 10자 이하여야합니다."),
        email: yup.string().email("이메일 형식으로 입력해주세요!"),
        password: yup
          .string()
          .matches(
            REGEXP_PASSWORD,
            "비밀번호는 영문 대소문자, 숫자, 특수문자를 모두 포함하여 8글자 이상이여야합니다!"
          ),
        confirmPassword: yup.string().when("password", {
          is: (password: string) => !!password,
          then: yup
            .string()
            .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다!")
            .required("비밀번호 재입력을 입력해주세요!"),
        }),
        profileImage: yup.mixed(),
        gender: yup
          .mixed<Gender>()
          .oneOf(Object.values(Gender), "유형이 일치하지 않습니다."),
        dateOfBirth: yup.date().required(),
        address: yup.object().shape({
          postalCode: yup.string().required("주소를 입력해주세요!"),
          state: yup.string().required("주소를 입력해주세요!"),
          city: yup.string().required("주소를 입력해주세요!"),
          roadAddress: yup.string().required("주소를 입력해주세요!"),
        }),
      })
    ),
    ...props,
  });
