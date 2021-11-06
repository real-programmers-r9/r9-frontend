import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { SignInForm } from "src/types/forms";
import { User } from "src/types/stores";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    credentials: "include",
  }),
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return null;
  },
  endpoints: (builder) => ({
    postSignIn: builder.mutation<User, SignInForm>({
      query: (data) => ({
        url: "auth",
        method: "POST",
        body: data,
      }),
    }),
    getMyInfo: builder.query<User, string>({
      query: (cookie) => ({
        url: `users/me`,
        method: "GET",
        headers: {
          cookie,
        },
      }),
    }),
  }),
});

export const {
  usePostSignInMutation,
  useGetMyInfoQuery,
  useLazyGetMyInfoQuery,
} = api;
