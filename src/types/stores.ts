export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  BUSINESS = "BUSINESS",
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Auth {
  user: User | null;
}
