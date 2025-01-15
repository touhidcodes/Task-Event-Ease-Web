"use client";

import { jwtDecode, JwtPayload } from "jwt-decode";
import { authKey } from "@/constants/authKey";
import { getCookie } from "@/utils/nextCookies";

const useUserInfo = async () => {
  const authToken = await getCookie(authKey);
  // console.log(authToken);

  if (authToken) {
    const decodedData: JwtPayload & { role: string } = jwtDecode(
      authToken
    ) as JwtPayload & {
      role: string;
    };

    return {
      ...decodedData,
      role: decodedData.role || "",
    };
  }
  return null; // If no token, return null or handle as needed
};

export default useUserInfo;

// "use client";

// import { jwtDecode, JwtPayload } from "jwt-decode";
// import Cookies from "js-cookie";
// import { authKey } from "@/constants/authKey";

// interface DecodedData extends JwtPayload {
//   role?: string;
// }

// const useUserInfo = () => {
//   const authToken = Cookies.get(authKey);
//   // console.log(authToken);

//   if (authToken) {
//     const decodedData: DecodedData = jwtDecode<DecodedData>(authToken);

//     return {
//       ...decodedData,
//       role: decodedData.role || "",
//     };
//   }

//   return null; // Return null if no token found
// };

// export default useUserInfo;
