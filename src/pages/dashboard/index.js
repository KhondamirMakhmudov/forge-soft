import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Dashboard from "@/components/dashboard";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <Dashboard
      titleHeader={"Xush kelibsiz! O'zingizga kerakli bo'limni tanlang"}
    ></Dashboard>
  );
}
