import Head from "next/head";
import Image from "next/image";

const Header = ({ headerTitle }) => {
  return (
    <div className="flex justify-between items-center bg-white border border-[#F5F5F5] py-[12px] px-[16px] rounded-lg">
      <div className="flex items-center gap-x-[8px]">
        <Image src={"/images/left.png"} alt="left" width={24} height={24} />
        <h2 className="font-medium text-[24px]">{headerTitle}</h2>
      </div>

      <div className="flex gap-x-[11px]">
        <button>
          <Image src={"/images/bell.png"} alt="bell" width={18} height={18} />
        </button>

        <div className=" flex items-center gap-x-[8px] border border-[#F0F0F0] px-[12px] py-[10px] rounded-[6px]">
          <Image
            src={"/images/calendar.png"}
            alt="calendar"
            width={18}
            height={18}
          />

          <p className="!text-[#D9D9D9]">Seshanba, 10 Avgust, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
