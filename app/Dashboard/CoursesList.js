import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function CoursesList() {
  const courses = Array(5).fill({
    name: "Makeup Fundamentals: Master the Basics",
    category: "Basic Makeup Techniques",
    price: "$450",
    status: "Active Course",
  });

  return (
    <div className="bg-white shadow-md p-6 rounded-lg mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Courses List</h2>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          View All
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#fdf9ec] ">
          <tr>
            <th className="p-2 border-b text-[#cca961]">Course Name</th>
            <th className="p-2 border-b text-[#cca961]">Category</th>
            <th className="p-2 border-b text-[#cca961]">Price</th>
            <th className="p-2 border-b text-[#cca961]">Status</th>
            <th className="p-2 border-b text-[#cca961]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td className="p-2 border-b flex items-center">
                <img src="cos.png" alt="Course" className="w-10 h-10 mr-2" />
                {course.name}
              </td>
              <td className="p-2 border-b">{course.category}</td>
              <td className="p-2 border-b">{course.price}</td>
              <td className="p-2 border-b text-green-500">{course.status}</td>
              <td className="p-2 border-b flex space-x-2">
                <button className="text-yellow-500">
                  <FaEye />
                </button>
                <button className="text-blue-500">
                  <FaEdit />
                </button>
                <button className="text-red-500">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
