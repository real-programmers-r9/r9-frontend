export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Auth {
  user: User | null;
}
