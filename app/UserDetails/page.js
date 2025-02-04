import React from "react";
import { FaPlay, FaEdit, FaTrash } from "react-icons/fa";
import { faCog, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaUpload } from "react-icons/fa";
const UserDetails = () => {
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
  const user = {
    fullname: "John Doe",
    city: "New York",
    email: "johndoe@example.com",
    phone: "(123) 456-7890",
    enrolledCourses: lessons.length,
  };
  return (
    <div className="bg-white min-h-screen">
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

      <div className="flex flex-col lg:flex-row gap-6 bg-white p-6 rounded-lg shadow-lg h-[93vh]">
        {/* Course Details Section */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-3/5 mx-auto">
          {/* Title */}
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              User Details
            </h2>
            {/* <div className="flex space-x-4">
              <button className="text-yellow-500 hover:text-yellow-600">
                <FaEdit size={18} />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <FaTrash size={18} />
              </button>
            </div> */}
          </div>

          {/* Video Thumbnail */}
          <div className="relative mb-4">
            <img
              src="cos.png" // Replace with the course image path
              alt="Course Thumbnail"
              className="w-full h-72 object-cover rounded-lg"
            />
          </div>

          {/* User Information */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Personal Information
            </h2>
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-700">
                <span className="font-bold">Full Name: </span>
                {user.fullname}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="font-bold">City: </span>
                {user.city}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="font-bold">Email: </span>
                {user.email}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="font-bold">Phone: </span>
                {user.phone}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="font-bold">Enrolled Courses: </span>
                {user.enrolledCourses}
              </p>
            </div>
          </div>
        </div>

        {/* Lessons Details Section */}
        <div className="lg:w-2/5 bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4"> Enrolled Lessons</h2>
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

export default UserDetails;
