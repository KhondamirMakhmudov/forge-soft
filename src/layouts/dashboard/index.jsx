import react from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

const Dashboard = ({ children, title }) => {
  return (
    <div className="flex bg-[#FCFCFC] gap-x-[12px] p-[12px] min-h-screen">
      <Sidebar />

      <main className="w-full flex flex-col gap-y-[12px]">
        <Header headerTitle={title} />
        <section className="">{children}</section>
      </main>
    </div>
  );
};

export default Dashboard;
