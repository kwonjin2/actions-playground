"use client";

import { useAuth } from "@/src/contexts/AuthContext";

export const LoginButton = () => {
  const { isAuthenticated } = useAuth();

  const errorEvent = () => {
    throw new Error("클릭이벤트 에러");
  };

  return (
    <button
      onClick={errorEvent}
      className={`px-4 py-2 ${
        isAuthenticated ? "bg-red-500" : "bg-blue-500"
      } rounded text-white`}
    >
      {isAuthenticated ? "로그아웃" : "로그인"}
    </button>
  );
};
