"use server";

import { cookies } from "next/headers";

const setAccessToken = async (key: string, value: string) => {
  const cookieStore = await cookies(); // Await the promise to resolve the cookie store
  cookieStore.set(key, value, {
    path: "/",
    httpOnly: true, // Optional: To ensure the cookie is accessible only via HTTP requests
    secure: process.env.NODE_ENV === "production", // Optional: To secure cookies in production
    maxAge: 60 * 60 * 24, // Optional: Set cookie expiry (1 day)
  });
};

export default setAccessToken;
