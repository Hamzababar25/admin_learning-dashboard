import SalesChart from "./SalesChart";
import StatsCard from "./StatsCard";
import UsersChart from "./UsersChart";
import CoursesList from "./CoursesList";
export default function Dashboard() {
  return (
    <div>
      {/* Full-Width Section */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left Section: 2x2 Grid of Stats Cards */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
            <div className="mr-4 text-3xl font-bold">10</div>
            <div>
              <h2 className="text-lg font-semibold">Total Users</h2>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
            <div className="mr-4 text-3xl font-bold">10</div>
            <div>
              <h2 className="text-lg font-semibold">Total Courses</h2>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
            <div className="mr-4 text-3xl font-bold">10</div>
            <div>
              <h2 className="text-lg font-semibold">Active Users</h2>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
            <div className="mr-4 text-3xl font-bold">10</div>
            <div>
              <h2 className="text-lg font-semibold">Active Courses</h2>
            </div>
          </div>
        </div>

        {/* Right Section: Chart */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Courses Stats</h2>
          <div className="flex items-center">
            <div className="w-1/2">
              <div className="text-4xl font-bold text-center">500</div>
              <h3 className="text-center">Total Courses</h3>
            </div>
            <div className="w-1/2">
              {/* Placeholder for Pie Chart */}
              <div className="h-40 w-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                <span>Chart Placeholder</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <ul className="space-y-2">
              <li className="text-green-500">370 Active Courses</li>
              <li className="text-red-500">80 Inactive Courses</li>
              <li className="text-orange-500">50 Draft Courses</li>
            </ul>
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
