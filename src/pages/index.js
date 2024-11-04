import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="flex">
      <div className="w-2/5 min-h-screen flex items-center justify-center">
        <div className="flex flex-col">
          <h6 className="font-medium text-[24px] mb-[4px] text-center">
            Platformaga kirish
          </h6>
          <p className="text-[#393C4E] font-normal mb-[35px] flex justify-center items-center text-center">
            Loyiha-smeta hujjatlarini ekspertizadan o‘tkazish axborot tizimiga
            xush kelibsiz
          </p>

          <motion.form
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            className=""
          >
            <div>
              <label>Login</label>
              <input
                type="text"
                placeholder="Loginni kiriting"
                className="px-[12px] py-[10px] w-full border border-[#F0F0F0] rounded-[6px] mt-[4px] mb-[16px] placeholder:text-sm"
              />
            </div>

            <div>
              <label>Parol</label>
              <div className="flex mb-[35px] relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Parolni kiriting"
                  className="px-[12px] py-[10px]  w-full border border-[#F0F0F0] rounded-[6px] mt-[4px] placeholder:text-sm"
                />
                <div className="absolute right-0 top-[18px]   mr-[10px]">
                  <Image
                    onClick={togglePasswordVisibility}
                    src={
                      isPasswordVisible
                        ? "/images/closed_eye.png"
                        : "/images/eye.png"
                    }
                    alt="eye"
                    width={18}
                    height={18}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <Link href={"/appeals"}>
              <button className="bg-[#01565B] hover:bg-[#013D41] active:bg-[#002426] text-white w-full py-[10px] rounded-[8px] mb-[16px] transition-all duration-300">
                Kirish
              </button>
            </Link>

            <Link
              href={"#"}
              className="text-[#8C8C8C] flex items-center justify-center "
            >
              Login yoki parolni unutdingizmi?
            </Link>
          </motion.form>
        </div>
      </div>

      <div className=" w-3/5  ">
        <div
          className=" h-screen bg-no-repeat p-[24px] bg-cover"
          style={{ backgroundImage: "url(/images/bg-auth.jpg)" }}
        >
          <Image src={"/images/Logo.png"} alt="logo" width={103} height={42} />
        </div>
      </div>
    </div>
  );
}
