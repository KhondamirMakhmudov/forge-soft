import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="flex bg-[#FCFCFC] gap-x-[12px] p-[12px] min-h-screen">
      <Sidebar />

      <main className="w-full">
        <Header
          headerTitle={"Xush kelibsiz! O'zingizga kerakli bo'limni tanlang"}
        />
      </main>
    </div>
  );
}
