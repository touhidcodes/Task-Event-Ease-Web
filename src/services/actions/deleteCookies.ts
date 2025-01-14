"use server";

import { NextResponse } from "next/server";

export const deleteCookies = (keys: string[]) => {
  const response = NextResponse.next();

  keys.forEach((key) => {
    response.cookies.set(key, "", { maxAge: 0, path: "/" });
  });

  return response;
};
