"use client";
import React from "react";
import Header from "@/components/ui/header/header";
import { BannersTable } from "@/components/banner-table";

const ManageBanner = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-white  rounded-lg">
        <Header title={"Banners"} />
        <BannersTable />
      </div>
    </div>
  );
};

export default ManageBanner;
