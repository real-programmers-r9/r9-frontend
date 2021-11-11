import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { SignInForm, SignUpForm } from "~/types/forms";
import { User } from "~/types/user";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_BASEURL,
    credentials: "include",
  }),
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return null;
  },
  endpoints: (builder) => ({
    signIn: builder.mutation<User, SignInForm>({
      query: (data) => ({
        url: "auth",
        method: "POST",
        body: data,
      }),
    }),
    signUp: builder.mutation<User, SignUpForm>({
      query: (data) => {
        const { confirmPassword, ...body } = data;
        return {
          url: "users",
          method: "POST",
          body,
        };
      },
    }),
    signOut: builder.mutation<User, void>({
      query: () => ({
        url: "auth/signout",
        method: "POST",
      }),
    }),
    myInfo: builder.query<User, { cookie: string }>({
      query: ({ cookie }) => ({
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
  useLazyMyInfoQuery,
  useMyInfoQuery,
  useSignInMutation,
  useSignOutMutation,
  useSignUpMutation,
  util: { getRunningOperationPromise, getRunningOperationPromises },
} = api;

export const { myInfo, signIn, signOut, signUp } = api.endpoints;
