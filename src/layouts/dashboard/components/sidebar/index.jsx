import React from "react";
import Image from "next/image";

import Link from "next/link";
import { get } from "lodash";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";

const sideBarMenuData = [
  {
    id: 1,
    title: "Murojaatlar",
    url: "/appeals",
    quantity: 100,
  },
  {
    id: 2,
    title: "Mening hisoblarim",
    url: "/notes",
    quantity: 10,
  },

  {
    id: 3,
    title: "Billing",
    url: "/billing",
    quantity: 3,
  },

  {
    id: 4,
    title: "Mening xatlarim",
    url: "/my-messages",
    quantity: 56,
  },

  {
    id: 5,
    title: "Eʼlonlar",
    url: "/announcements",
    quantity: 32,
  },
  {
    id: 6,
    title: "Bilimlar bazasi",
    url: "/databases",
    quantity: 0,
  },
];

const Sidebar = ({ openSideBar, setOpenSideBar }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleProfile = () => setOpen(!open);
  return (
    <div className="w-[270px] flex flex-col !bg-white border border-[#F5F5F5] rounded-xl p-[8px]">
      <div className="flex items-center justify-between">
        <Image src={"/images/Logo.png"} alt="logo" width={103} height={42} />
        <Image src={"/images/left.png"} alt="left" width={24} height={24} />
      </div>

      <Link
        href={"/"}
        className=" bg-[#01565B]  hover:bg-black  w-full py-[12px] gap-x-[12px] flex justify-center items-center rounded-[8px] mb-[8px]"
      >
        <p className="text-white text-sm font-medium">BIM technology</p>
      </Link>

      {/* <div className="relative w-full">
        <button
          onClick={toggleProfile}
          className="p-[8px] flex justify-between items-center w-full border border-[#F5F5F5] rounded-lg"
        >
          <div className="flex text-start gap-x-[8px]">
            <Image
              src={"/icons/avatar.svg"}
              alt="logo"
              width={48}
              height={48}
            />

            <div>
              <h4 className="font-medium text-black">Utkir Musaboev</h4>
              <p className="text-sm text-[#8C8C8C]">Ekspert</p>
            </div>
          </div>

          <Image
            src={"/images/left.png"}
            alt="left"
            width={18}
            height={18}
            className={`${
              open ? "rotate-90" : "-rotate-90"
            } transition-all duration-300`}
          />
        </button>

        {open && (
          <motion.div
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            exit={{ opacity: 0, translateY: "10px" }}
            className="absolute -top-[85px]  left-0 right-0 "
          >
            <div className="border rounded-lg gap-y-[8px] shadow-md">
              <Link
                href={"#"}
                className="flex p-[8px] hover:bg-[#F5F5F5] items-center justify-between transition-all duration-300"
              >
                <h4>Sozlamalar</h4>
                <Image
                  src={"/icons/settings.svg"}
                  alt="left"
                  width={18}
                  height={18}
                  className="-rotate-90"
                />
              </Link>
              <Link
                href={"#"}
                className="flex p-[8px] hover:bg-[#F5F5F5]  items-center justify-between transition-all duration-300"
              >
                <h4>Chiqish</h4>
                <Image
                  src={"/icons/exit.png"}
                  alt="left"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
          </motion.div>
        )}
      </div> */}
    </div>
  );
};

export default Sidebar;
