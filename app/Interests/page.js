"use client"
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaUpload } from "react-icons/fa";
import axios from "axios";

const API_BASE_URL = "https://salonapp-f05m.onrender.com/api/v1/admin";

const ManageInterests = () => {
  const [interests, setInterests] = useState([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchInterests();
  }, []);

  const fetchInterests = async () => {
    try {
      const token = localStorage.getItem("token"); // Adjust based on how you store the token
      const response = await axios.get(
        "https://salonapp-f05m.onrender.com/api/v1/admin/interest/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setInterests(response.data.interests);
    } catch (error) {
      console.error("Error fetching interests", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    if (file) formData.append("file", file);
  
    try {
      const token = localStorage.getItem("token"); // Ensure you're getting the correct token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      };
  
      if (editingId) {
        await axios.put(
          `${API_BASE_URL}/interest/${editingId}/update`,
          formData,
          config
        );
      } else {
        await axios.post(
          `${API_BASE_URL}/interest/create`,
          formData,
          config
        );
      }
      fetchInterests();
      setName("");
      setFile(null);
      setEditingId(null);
    } catch (error) {
      console.error("Error saving interest", error.response?.data || error);
    }
  };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     if (file) formData.append("file", file);

//     try {
      
//       if (editingId) {
//         const token = localStorage.getItem("token");
//         await axios.put(`${API_BASE_URL}/interest/${editingId}/update`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }, formData);
//       } else {
//         await axios.post(`${API_BASE_URL}/interest/create`, formData);
//       }
//       fetchInterests();
//       setName("");
//       setFile(null);
//       setEditingId(null);
//     } catch (error) {
//       console.error("Error saving interest", error);
//     }
//   };

  const handleDelete = async (id) => {
    try {
        const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE_URL}/interest/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchInterests();
    } catch (error) {
      console.error("Error deleting interest", error);
    }
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-2xl font-bold">Manage Interests</h1>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-4">
        <input
          type="text"
          placeholder="Interest Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editingId ? "Update" : "Add"} Interest
        </button>
      </form>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {interests.map((interest) => (
          <div key={interest._id} className="border p-4 rounded shadow">
            <img
              src={interest.image?.url}
              alt={interest.name}
              className="w-full h-72 object-cover rounded"
            />
            <h2 className="mt-2 font-bold">{interest.name}</h2>
            <div className="flex gap-2 mt-2">
              <button
                className="text-yellow-500"
                onClick={() => {
                  setName(interest.name);
                  setEditingId(interest._id);
                }}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500"
                onClick={() => handleDelete(interest._id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInterests;
