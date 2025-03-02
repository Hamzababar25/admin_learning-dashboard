/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { faCog, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaUpload } from "react-icons/fa";
import utility from "@/utils/utility";

const ManageCourses = () => {
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
    name: "Makeup Fundamentals: Master the Basics",
    category: "Basic Makeup Techniques",
    price: "$450",
    status: "Active Course",
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
            <h1 className="text-2xl font-bold text-gray-800">Manage Courses</h1>
          </div>

          {/* Icons and Profile Section */}
          <div className="flex items-center space-x-6">
            {/* Settings Icon */}
            <button className="text-gray-600 hover:text-gray-800">
              <FontAwesomeIcon icon={faCog} className="w-5 h-5" />
            </button>

            <button className="relative text-gray-600 hover:text-gray-800">
              <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
              <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>

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
          <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 w-1/4 space-x-4">
            <IoIosSearch />
            <input
              type="text"
              placeholder="Search here"
              className="outline-none flex-1"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-yellow-500 transition">
              <i className="fas fa-th-large"></i>
            </button>
            <button className="text-gray-500 hover:text-yellow-500 transition">
              <i className="fas fa-list"></i>
            </button>
          </div>

          {/* New Course Button */}
          <button
            className=" flex gap-x-2 px-4 pt-3  py-2 bg-black text-white rounded-3xl hover:bg-blue-700"
            onClick={() => setFormOpen(true)}
          >
            <div className="bg-white rounded-md w-6 h-6 pb-1 font-bold text-black">
              +
            </div>
            <div className="font-bold mb-1"> New Course</div>
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md p-6 rounded-lg mt-4">
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
                    <img
                      src="cos.png"
                      alt="Course"
                      className="w-10 h-10 mr-2"
                    />
                    {course.name}
                  </td>
                  <td className="p-2 border-b">{course.category}</td>
                  <td className="p-2 border-b">{course.price}</td>
                  <td className="p-2 border-b text-green-500">
                    {course.status}
                  </td>
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
      {/* Slide-in Form */}
      {/* Overlay with opacity transition */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity ${
          isFormOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setFormOpen(false)} // Close form on overlay click
      ></div>

      {/* Slide-in Form */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-1/3 overflow-y-auto bg-white shadow-lg z-50 transform transition-transform ${
          isFormOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">Add New Course</h2>
          <button
            className="text-gray-500 hover:text-red-500 text-2xl"
            onClick={() => setFormOpen(false)}
          >
            &times;
          </button>
        </div>
        <form className="p-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block mb-1 font-semibold">Course Title</label>
              <input
                type="text"
                placeholder="Enter course title"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 font-semibold">
                Course Language
              </label>
              <select
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select language
                </option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Course Total Price
            </label>
            <input
              type="number"
              placeholder="Enter total price"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Course Description
            </label>
            <textarea
              placeholder="Enter description"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Upload Course Intro Video
            </label>
            <div
              className="flex items-center gap-4 border border-gray-300 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={handleUploadClick} // Link the div to input click
            >
              <FaUpload className="text-yellow-500" />
              <span className="text-gray-600">
                {videoName ? videoName : "Upload Course Intro Video"}
              </span>
            </div>
            <input
              type="file"
              id="hidden-file-input"
              accept="video/*"
              onChange={handleVideoUpload}
              style={{ display: "none" }} // Hide the input
            />
            {videoBase64 && (
              <p className="mt-3 text-sm text-green-500">
                Video uploaded successfully!
              </p>
            )}
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* <button
              type="button"
              className="bg-white border border-gray-300 text-black px-6 py-3 rounded-lg hover:bg-gray-200"
              onClick={() => setLessonModalOpen(true)}
            >
              Add Course Lessons
            </button> */}
            {/* Lessons Section */}
            <div className="w-full">
              <h3 className="text-lg font-bold mb-4">Add Course Lessons</h3>
              {lessons.map((lesson, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 p-4 rounded-lg  "
                >
                  <h4 className="font-semibold mb-2 text-yellow-600">
                    Lesson #{index + 1}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-1 font-semibold">
                        Lesson Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter lesson title"
                        value={lesson.title}
                        onChange={(e) =>
                          handleLessonChange(index, "title", e.target.value)
                        }
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-semibold">
                        Lesson Type
                      </label>
                      <select
                        value={lesson.type}
                        onChange={(e) =>
                          handleLessonChange(index, "type", e.target.value)
                        }
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
                      >
                        <option value="" disabled>
                          Select lesson type
                        </option>
                        <option value="video">Video</option>
                        <option value="document">Document</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-semibold">
                      Upload Lesson Video
                    </label>
                    <div
                      className="flex items-center gap-4 border border-gray-300 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
                      onClick={() =>
                        document.getElementById(`video-input-${index}`).click()
                      }
                    >
                      <FaUpload className="text-yellow-500" />
                      <span className="text-gray-600">
                        {lesson.videoName || "Upload Lesson Video"}
                      </span>
                    </div>
                    <input
                      type="file"
                      id={`video-input-${index}`}
                      accept="video/*"
                      onChange={(e) => handleLessonVideoUpload(index, e)}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              ))}
              <div className="">
                <button
                  type="button"
                  className="bg-yellow-500 text-white py-2 px-4 mr-6 w-28 rounded-lg hover:bg-yellow-600"
                  onClick={addNewLesson}
                >
                  Add More
                </button>
                <button
                  type="submit"
                  className="bg-black text-white py-2 px-4 w-24 rounded-lg hover:bg-gray-800"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageCourses;
