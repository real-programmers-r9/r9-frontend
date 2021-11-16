export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  BUSINESS = "BUSINESS",
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export interface Address {
  id: number;
  postalCode: string;
  state: string;
  city: string;
  roadAddress: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  gender: Gender;
  dateOfBirth: Date;
  profileImage?: string;
  role: Role;
  address: Address;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
export interface ProfileImage {
  ETag: string;
  Location: string;
  key: string;
  Key: string;
  Bucket: string;
}
