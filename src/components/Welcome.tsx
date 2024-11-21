"use client";
import React from "react";
import scss from "./Welcome.module.scss";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  return (
    <div className={scss.Welcome}>
      Welcome
      <button onClick={() => router.push(`/todo`)}>View the todos</button>
    </div>
  );
};

export default Welcome;
