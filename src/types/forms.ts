import { Address, Gender, Role } from "./user";

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  role: Role;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  gender: Gender;
  dateOfBirth: Date;
  address: Omit<Address, "id">;
}
