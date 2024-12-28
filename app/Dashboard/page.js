"use client";
import SalesChart from "./SalesChart";
import { FaUsers } from "react-icons/fa"; // Example icon from react-icons
import { FaFile } from "react-icons/fa";

import StatsCard from "./StatsCard";
import UsersChart from "./UsersChart";
import CoursesList from "./CoursesList";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  // labels: ["Active Courses", "Inactive Courses", "Draft Courses"],
  datasets: [
    {
      label: "# of Courses",
      data: [370, 80, 50], // Replace with dynamic data
      backgroundColor: ["#4CAF50", "#F44336", "#FFC107"],
      borderWidth: 1,
    },
  ],
};
const options = {
  cutout: "50%", // Creates the white center by increasing the cutout size
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
};
export default function Dashboard() {
  return (
    <div>
      {/* Full-Width Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Section: 2x2 Grid of Stats Cards */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg h-28">
            {/* Left Section: Value and Label */}
            <div className="space-y-5">
              <h2 className="text-4xl font-bold">10</h2>
              <p className="text-sm text-gray-500">Total Users</p>
            </div>

            {/* Right Section: Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-[#fdf9ec] rounded-full border border-yellow-300 xl:mr-2">
              <FaUsers className="text-yellow-600 text-4xl" />
            </div>
          </div>
          <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg h-28">
            {/* Left Section: Value and Label */}
            <div className="space-y-5">
              <h2 className="text-4xl font-bold">10</h2>
              <p className="text-sm text-gray-500">Total Courses</p>
            </div>

            {/* Right Section: Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-[#fdf9ec] rounded-full border border-yellow-300 xl:mr-2">
              <FaFile className="text-yellow-600 text-4xl" />
            </div>
          </div>
          <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg h-28">
            {/* Left Section: Value and Label */}
            <div className="space-y-5">
              <h2 className="text-4xl font-bold">10</h2>
              <p className="text-sm text-gray-500">Active Users </p>
            </div>

            {/* Right Section: Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-[#fdf9ec] rounded-full border border-yellow-300 xl:mr-2">
              <FaUsers className="text-yellow-600 text-4xl" />
            </div>
          </div>
          <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg h-28">
            {/* Left Section: Value and Label */}
            <div className="space-y-5">
              <h2 className="text-4xl font-bold">10</h2>
              <p className="text-sm text-gray-500">Active Courses</p>
            </div>

            {/* Right Section: Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-[#fdf9ec] rounded-full border border-yellow-300 xl:mr-2">
              <FaFile className="text-yellow-600 text-4xl" />
            </div>
          </div>
        </div>

        {/* Right Section: Chart */}
        <div className="bg-white shadow-md p-6 rounded-lg h-60">
          <h2 className="text-lg font-semibold lg:mb-4 xl:mb-0">
            Courses Stats
          </h2>
          <div className="flex flex-col lg:flex-row items-center ">
            {/* Legend Section */}
            <div className="w-full 2xl:w-1/3 xl:w-1/2  lg:w-3/4 text-xs  lg:mb-0">
              <ul className="space-y-2">
                <li className="text-yellow-600 font-extrabold">
                  500 Total Courses
                </li>
                <li className="text-green-500">370 Active Courses</li>
                <li className="text-red-500">80 Inactive Courses</li>
                <li className="text-orange-500">50 Draft Courses</li>
              </ul>
            </div>

            {/* Donut Chart */}
            <div className="w-full 2xl:w-2/3 xl:w-1/2 lg:w-1/4  ">
              <div className="xl:w-44 xl:h-44 lg:w-24 lg:h-24 mx-auto relative ">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* <p className="text-3xl font-bold">500</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <SalesChart />
        <UsersChart />
      </div>
      <CoursesList />
    </div>
  );
}
