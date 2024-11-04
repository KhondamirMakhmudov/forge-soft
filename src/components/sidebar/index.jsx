import React from "react";
import Image from "next/image";

import Link from "next/link";
import { get, isEmpty } from "lodash";
import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sideBarMenuData = [
  {
    id: 1,
    title: "Loyihachilar",
    url: "#",
    quantity: 100,
    subMenu: [
      {
        id: 1,
        title: "loyihalar",
      },
    ],
  },
  {
    id: 2,
    title: "Tekshiruvlar",
    url: "#",
    subMenu: [
      {
        id: 1,
        title: "Tekshirilgan",
        url: "/checked",
      },

      {
        id: 2,
        title: "Tekshirilmagan",
        url: "/unchecked",
      },
    ],
  },

  {
    id: 3,
    title: "Normalar",
    url: "#",
    subMenu: [
      {
        id: 1,
        title: "Normalar",
        url: "/norms",
      },

      {
        id: 2,
        title: "Klassifikatorlar",
        url: "/classifiers",
      },
    ],
  },

  {
    id: 4,
    title: "Smetalar",
    url: "#",
    subMenu: [
      {
        id: 1,
        title: "ShNK yaratish",
        url: "/create-shnk",
      },

      {
        id: 2,
        title: "smeta shnk",
        url: "/estimates-shnk",
      },
    ],
  },
];

const Sidebar = ({ openSideBar, setOpenSideBar }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(null);

  const toggleMenu = (menu) => {
    if (open === menu) {
      setOpen(null);
    } else {
      setOpen(menu);
    }
  };
  return (
    <div className="w-[270px] flex flex-col !bg-white border border-[#F5F5F5] rounded-xl p-[8px]">
      <div className="flex items-center justify-between">
        <Image src={"/images/Logo.png"} alt="logo" width={103} height={42} />
        <Image src={"/images/left.png"} alt="left" width={24} height={24} />
      </div>

      <div className=" bg-[#E6EEEF] px-[15px] my-[20px] w-full py-[12px] gap-x-[12px] flex flex-col items-start rounded-[8px] mb-[8px]">
        <h1 className="text-[#01565B] text-sm font-medium ">BIM technology</h1>
        <p className="text-xs">Dashboards,widgets & layout.</p>
      </div>

      <div>
        <ul className="space-y-2">
          {sideBarMenuData.map((item) => (
            <li
              key={get(item, "id")}
              className="p-[8px] bg-[#E6EEEF] rounded-lg"
            >
              <Link
                href={get(item, "url")}
                onClick={() => toggleMenu(get(item, "title"))}
                className="flex justify-between items-center gap-x-[10px]"
              >
                <div className="flex items-center gap-x-[10px]">
                  <Image
                    src={`/images/sidebar-menu-${get(item, "id")}.png`}
                    width={23}
                    height={23}
                  />
                  <p className="text-sm">{get(item, "title")}</p>
                </div>
                <Image
                  src={"/images/left.png"}
                  alt="left"
                  width={16}
                  height={16}
                  className={`${
                    open ? "-rotate-90" : "rotate-180"
                  } transition-all duration-200`}
                />
              </Link>
              {isEmpty(get(item, "subMenu"))
                ? ""
                : open === get(item, "title") && (
                    <AnimatePresence>
                      <motion.ul
                        className={"space-y-2 mt-[10px] ml-[15px]"}
                        initial={{ opacity: 0, translateY: "30px" }}
                        animate={{ opacity: 1, translateY: "0px" }}
                        exit={{ opacity: 0, translateY: "30px" }}
                      >
                        {get(item, "subMenu").map((subItem) => (
                          <li className="flex items-center space-x-4">
                            <Link
                              href={`${get(item, "url")}`}
                              className="flex items-center space-x-4"
                            >
                              <span>-</span>
                              <p className="text-xs">{get(subItem, "title")}</p>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
