"use server";

import { NextResponse } from "next/server";

export const deleteCookies = async (keys: string[]) => {
  const response = await NextResponse.next();

  keys.forEach((key) => {
    response.cookies.set(key, "", { maxAge: 0, path: "/" });
  });

  return response;
};
