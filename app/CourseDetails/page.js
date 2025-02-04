import React from "react";
import { FaPlay, FaEdit, FaTrash } from "react-icons/fa";
import { faCog, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaUpload } from "react-icons/fa";
const CourseDetails = () => {
  const lessons = [
    {
      title: "Master the Basics",
      description: "Physical course",
      thumbnail: "/path/to/lesson-image.jpg", // Replace with your thumbnail path
    },
    // Add more lessons here
    {
      title: "Master the Basics",
      description: "Physical course",
      thumbnail: "/path/to/lesson-image.jpg",
    },
    {
      title: "Master the Basics",
      description: "Physical course",
      thumbnail: "/path/to/lesson-image.jpg",
    },
    {
      title: "Master the Basics",
      description: "Physical course",
      thumbnail: "/path/to/lesson-image.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="flex items-center justify-between py-4 px-10 pr-20 ">
        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manage Courses</h1>
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

      <div className="flex flex-col lg:flex-row gap-6 bg-white p-6 rounded-lg shadow-lg h-[93vh]">
        {/* Course Details Section */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-3/5 mx-auto">
          {/* Title */}
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Course Details
            </h2>
            <div className="flex space-x-4">
              <button className="text-yellow-500 hover:text-yellow-600">
                <FaEdit size={18} />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <FaTrash size={18} />
              </button>
            </div>
          </div>

          {/* Video Thumbnail */}
          <div className="relative mb-4">
            <img
              src="cos.png" // Replace with the course image path
              alt="Course Thumbnail"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="bg-white p-3 rounded-full shadow-md">
                <FaPlay className="text-yellow-500 text-lg" />
              </button>
            </div>
          </div>

          {/* Course Title and Price */}
          <h3 className="text-xl font-semibold text-gray-800">
            Master the Basics
          </h3>
          <p className="text-yellow-600 text-lg font-bold mt-2">$450</p>

          {/* Description */}
          <h4 className="text-md font-semibold text-yellow-600 mt-4">
            Description:
          </h4>
          <p className="text-gray-700 text-sm mt-2 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Lessons Details Section */}
        <div className="lg:w-2/5 bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Lessons Details</h2>
          <div className="space-y-4">
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border border-gray-300 p-3 rounded-lg shadow-sm"
              >
                <div className="relative">
                  <img
                    src="cos.png"
                    alt={`Lesson ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <FaPlay className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-semibold">{lesson.title}</h4>
                  <p className="text-gray-500 text-sm">
                    Description: {lesson.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
