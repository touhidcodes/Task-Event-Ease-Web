"use server";

import { cookies } from "next/headers";

// Function to set a cookie
export const setCookie = async (key: string, value: string) => {
  if (!key || !value) {
    return "";
  }

  const cookieStore = await cookies(); // Await cookies() to resolve
  cookieStore.set(key, value);
};

// Function to get a cookie
export const getCookie = async (key: string) => {
  if (!key) {
    return "";
  }

  const cookieStore = await cookies(); // Await cookies() to resolve
  const authToken = cookieStore.get(key);
  return authToken?.value; // Return the cookie value
};

// Function to remove a cookie
export const removeCookie = async (keys: string[]) => {
  if (!keys || keys.length === 0) {
    return "";
  }

  const cookieStore = await cookies(); // Await cookies() to resolve
  keys.forEach((key) => {
    cookieStore.delete(key);
  });
};
