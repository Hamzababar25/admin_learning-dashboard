"use client";
import React from "react";
import { InterestsTable } from "@/components/interest-table";
import Header from "@/components/ui/header/header";

const ManageInterest = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-white  rounded-lg">
        <Header title={"Manage Interests"} />
        <InterestsTable />
      </div>
    </div>
  );
};

export default ManageInterest;
