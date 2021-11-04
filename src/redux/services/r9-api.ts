import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SignInForm } from "src/types/forms";
import type { Auth, User } from "src/types/stores";

export const r9Api = createApi({
  reducerPath: "r9Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<Auth, SignInForm>({
      query: (data) => ({
        url: "auth",
        method: "POST",
        body: data,
      }),
      transformResponse: (payload: User) => {
        return { user: payload };
      },
    }),
  }),
});

export const { useLoginMutation } = r9Api;
