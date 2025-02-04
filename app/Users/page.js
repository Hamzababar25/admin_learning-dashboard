"use client";
import React, { useState } from "react";
import { faCog, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaUpload } from "react-icons/fa";
import utility from "@/utils/utility";

const ManageUsers = () => {
  const [isFormOpen, setFormOpen] = useState(false); // State for slide-in form
  const [videoBase64, setVideoBase64] = useState("");
  const [videoName, setVideoName] = useState("");
  const [isLessonModalOpen, setLessonModalOpen] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState({
    title: "",
    type: "",
    video: "",
    videoName: "",
  });

  const handleLessonChange = (field, value) => {
    setCurrentLesson((prev) => ({ ...prev, [field]: value }));
  };

  const handleLessonVideoUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const base64 = await utility.convertBase64(file);
        setCurrentLesson((prev) => ({
          ...prev,
          video: base64,
          videoName: file.name,
        }));
      } catch (error) {
        console.error("Error uploading video:", error);
      }
    }
  };

  const handleAddLesson = () => {
    setLessons((prev) => [...prev, currentLesson]);
    setCurrentLesson({ title: "", type: "", video: "", videoName: "" }); // Reset form
  };

  const courses = Array(10).fill({
    name: "Sami Ullah",
    city: "Lahore",
    courses: "450",
    status: "Enabled",
    image: "https://via.placeholder.com/40", // Placeholder for course image
  });
  const handleVideoUpload = async (event) => {
    const file = event.target.files[0]; // Get the selected file

    if (file) {
      setVideoName(file.name); // Store the file name

      try {
        const base64 = await utility.convertBase64(file); // Convert to Base64
        setVideoBase64(base64);
        console.log("Base64 Video:", base64); // Log or send to backend
      } catch (error) {
        console.error("Error converting file to Base64:", error);
      }
    }
  };
  const addNewLesson = () => {
    setLessons((prev) => [
      ...prev,
      { title: "", type: "", video: "", videoName: "" },
    ]);
  };

  const handleUploadClick = () => {
    document.getElementById("hidden-file-input").click(); // Trigger the hidden input
  };
  return (
    <div className="  min-h-screen">
      <div className="bg-white  rounded-lg">
        {/* Header Section */}
        <header className="flex items-center justify-between py-4 px-10 pr-20 ">
          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Manage Users</h1>
          </div>

          {/* Icons and Profile Section */}
          <div className="flex items-center space-x-6">
            {/* Settings Icon */}
            <button className="text-gray-600 hover:text-gray-800">
              <FontAwesomeIcon icon={faCog} className="w-5 h-5" />
            </button>

            {/* Bell Icon with Notification */}
            <button className="relative text-gray-600 hover:text-gray-800">
              <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
              <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/32"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-sm text-gray-800">
                <p className="font-bold">Otor John</p>
                <p className="text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </header>
        <div className="flex justify-between items-center mt-4 px-9 pr-16">
          {/* Search Bar */}

          <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 w-1/4 space-x-4">
            <IoIosSearch />
            <input
              type="text"
              placeholder="Search here"
              className="outline-none flex-1"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-yellow-500 transition">
              <i className="fas fa-th-large"></i>
            </button>
            <button className="text-gray-500 hover:text-yellow-500 transition">
              <i className="fas fa-list"></i>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md p-6 rounded-lg mt-4">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#fdf9ec] ">
              <tr>
                <th className="p-2 border-b text-[#cca961]">User Name</th>
                <th className="p-2 border-b text-[#cca961]">City</th>
                <th className="p-2 border-b text-[#cca961]">CoursesEnrolled</th>
                {/* <th className="p-2 border-b text-[#cca961]">Status</th> */}
                <th className="p-2 border-b text-[#cca961]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td className="p-2 border-b flex items-center">
                    <img
                      src="cos.png"
                      alt="Course"
                      className="w-10 h-10 mr-2"
                    />
                    {course.name}
                  </td>
                  <td className="p-2 pr-4 border-b">{course.city}</td>
                  <td className="p-2 pl-12 border-b">{course.courses}</td>

                  <td className="p-2 border-b flex space-x-2">
                    <button className="text-yellow-500">
                      <FaEye />
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

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600">Showing 7 from 20 data</span>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
              Previous
            </button>
            <button className="px-3 py-1 bg-yellow-400 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
              3
            </button>
            <button className="px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
              4
            </button>
            <button className="px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
