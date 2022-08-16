import React from "react";
import Image from "next/image";
import styles from "../styles/hero.module.css";
import ProfileLogo from "./ProfileLogo";

export default function Hero({ heading, message }) {
  return (
    <div
      className={`${styles.heroImg} flex flex-col gap-2 items-center justify-center w-full h-screen bg-fixed bg-center bg-cover bg-blue-500`}
    >
      {/* overlay */}
      <div className="w-full h-screen bg-gradient-to-r from-red-700 to-blue-700 opacity-20 absolute top-0 bottom-0 left-0 right-0 z-[-2]" />
      <div className="drop-shadow-2xl shadow-cyan-800">
        <ProfileLogo />
      </div>
      <div className="flex flex-col text-center">
        <h2 className="text-3xl">{heading}</h2>
        <p className="text-xl">{"<" + message + "/>"}</p>
      </div>
    </div>
  );
}
