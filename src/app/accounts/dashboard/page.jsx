import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardCard from "@/components/dashboard/DashboardCard";

const Dashboard = () => {
  const dashboardStats = [
    {
      title: "Total Degrees Issued",
      value: 721000,
      bgColor: "bg-green-500",
    },
    {
      title: "Degrees Verified",
      value: 12000,
      bgColor: "bg-green-500",
    },
    {
      title: "Revoked Degrees",
      value: 1156,
      bgColor: "bg-green-500",
    },
    {
      title: "Failed Verification",
      value: 239000,
      bgColor: "bg-green-500",
    },
  ];

  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />
      <main className="flex-1 py-8 mt-6 md:mt-0">
        <div className="mb-8 py-8 pl-8 text-[#FFFFFF66] border-b flex flex-row items-center">
          <img src="/Sidebar.png" className="w-6 h-7" alt="" />
          <h1 className="text-xl  text-[#FFFFFF66] ml-4">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-8">
          {dashboardStats.map((stat) => (
            <DashboardCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              bgColor={stat.bgColor}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
