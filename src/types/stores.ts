export interface User {
  createdAt: Date;
  updatedAt: Date;
  id: string;
  name: string;
  email: string;
  role: string;
  address?: string;
}

export interface Auth {
  user: User | null;
  accessToken: string | null;
}
