"use client";
import Dashboard from "@/components/dashboard";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import useGetQuery from "@/hooks/api/useGetQuery";
import React, { useState, useEffect } from "react";
import { get } from "lodash";
import dayjs from "dayjs";
import { motion } from "framer-motion";

const Checked = () => {
  const [mounted, setMounted] = useState(false);

  const {
    data: norms,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: KEYS.norms,
    url: URLS.norms,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dashboard titleHeader={"Tekshirilmagan loyihalar"}>
      <div className="bg-white border border-[#F5F5F5] py-[12px] px-[16px] rounded-lg mt-[12px]">
        <motion.table
          initial={{ opacity: 0, translateY: "30px" }}
          animate={{ opacity: 1, translateY: "0px" }}
          exit={{ opacity: 0, translateY: "30px" }}
          transition={{ duration: 0.3 }}
          className="border-collapse w-full text-[#474A4A]"
          suppressHydrationWarning={true}
        >
          <thead>
            <tr className="border text-xs">
              <th className="border py-[8px]">№</th>
              <th className="border py-[8px]">Norma raqami</th>
              <th className="border py-[8px]">Norma kodi</th>
              <th className="border py-[8px]">Nomlanishi</th>
              <th className="border py-[8px]">Turi</th>
              <th className="border py-[8px]">O&apos;lchovi</th>
              <th className="border py-[8px]">Batafsil</th>
            </tr>
          </thead>
          <tbody>
            {get(norms, "data.normas", [])?.map((tr) => (
              <tr
                key={get(tr, "id")}
                className="text-center text-xs odd:bg-[#F5F5F5]"
              >
                <td className="border py-[5px] px-[3px]">{get(tr, "id")}</td>
                <td className="border py-[5px]">{get(tr, "category_id")}</td>
                <td className="border py-[5px]">{get(tr, "code")}</td>
                <td className="border py-[8px] text-[10px]">
                  {get(tr, "title")}
                </td>
                <td className="border py-[5px]">{get(tr, "wall")}</td>
                <td className="border py-[5px] text-[10px]">
                  {get(tr, "measurment")}
                </td>
                <td className="border py-[5px]"></td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </Dashboard>
  );
};

export default Checked;
