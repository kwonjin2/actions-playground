"use client";

import { useState } from "react";

export const PasswordInput = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleButton = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div>
      <input
        placeholder="비밀번호를 입력하세요."
        aria-label="비밀번호"
        type={isShowPassword ? "text" : "password"}
      />
      <button onClick={handleButton}>
        {isShowPassword ? "숨기기" : "보기"}
      </button>
    </div>
  );
};
