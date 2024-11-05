"use client";
import Dashboard from "@/components/dashboard";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import useGetQuery from "@/hooks/api/useGetQuery";
import React, { useState, useEffect } from "react";
import { get } from "lodash";
import dayjs from "dayjs";

const Checked = () => {
  const [mounted, setMounted] = useState(false);

  const {
    data: projects,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: KEYS.projects,
    url: URLS.projects,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dashboard titleHeader={"Tekshirilgan loyihalar"}>
      <div className="bg-white border border-[#F5F5F5] py-[12px] px-[16px] rounded-lg mt-[12px]">
        <table
          className="border-collapse w-full text-[#474A4A]"
          suppressHydrationWarning={true}
        >
          <thead>
            <tr className="border text-xs">
              <th className="border py-[8px]">№</th>
              <th className="border py-[8px]">INN</th>

              <th className="border py-[8px]">Project ID</th>
              <th className="border py-[8px]">Kelgan sanasi</th>
              <th className="border py-[8px]">O&apos;zgartirilgan sanasi</th>
              <th className="border py-[8px]">Batafsil</th>
            </tr>
          </thead>
          <tbody>
            {get(projects, "data", [])?.map((tr) => (
              <tr
                key={get(tr, "id")}
                className="text-center text-xs odd:bg-[#E6EEEF]"
              >
                <td className="border py-[5px]">{get(tr, "id")}</td>
                <td className="border py-[5px]">{get(tr, "inn")}</td>

                <td className="border py-[5px]">{get(tr, "ifc_guid")}</td>
                <td className="border py-[5px] ">
                  <div className="flex justify-center items-center">
                    <p>{dayjs(get(tr, "created_at")).format("DD.MM.YYYY")}</p>
                    <span className="text-lg mx-[10px]">|</span>
                    <span className="text-[10px] font-medium">
                      {dayjs(get(tr, "created_at")).format("HH:mm")}
                    </span>
                  </div>
                </td>

                <td className="border py-[5px] flex justify-center items-center">
                  <div className="flex justify-center items-center">
                    <p>{dayjs(get(tr, "updated_at")).format("DD.MM.YYYY")}</p>
                    <span className="text-lg mx-[10px]">|</span>
                    <span className="text-[10px] font-medium">
                      {dayjs(get(tr, "updated_at")).format("HH:mm")}
                    </span>
                  </div>
                </td>
                <td className="border"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

export default Checked;
