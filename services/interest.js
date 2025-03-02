import { api } from "@/lib/api";

export const fetchInterests = async (page = 1, perPage = 10, search = "") => {
  try {
    const queryParams = new URLSearchParams({
      page,
      per_page: perPage,
    });

    if (search) {
      queryParams.append("search", search);
    }

    const response = await api.get(
      `/admin/interest/all?${queryParams.toString()}`
    );

    if (!response.status === 200) {
      throw new Error("Failed to fetch interests");
    }

    return await response.data;
  } catch (error) {
    console.error("Error fetching interests:", error);
    throw error;
  }
};

export const deleteInterest = async (id) => {
  try {
    const response = await api.delete(`/admin/interest/${id}/delete`);

    if (!response.ok) {
      throw new Error("Failed to delete interest");
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting interest:", error);
    throw error;
  }
};

export const createInterest = async (formData) => {
  try {
    const response = await api.post(`/admin/interest/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 201) {
      throw new Error(response.data?.message || "Failed to create interest");
    }

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("Error creating interest:", errorMessage);
    throw new Error(errorMessage);
  }
};
export const updateInterest = async (id, formData) => {
  try {
    const response = await api.put(`/admin/interest/${id}/update`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 200) {
      throw new Error(response.data?.message || "Failed to update interest");
    }

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("Error updating interest:", errorMessage);
    throw new Error(errorMessage);
  }
};
export const fetchInterestById = async (id) => {
  try {
    const response = await api.get(`/admin/interest/${id}`);

    if (response.status !== 200) {
      throw new Error("Failed to fetch interest");
    }

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("Error fetching interest:", errorMessage);
    throw new Error(errorMessage);
  }
};
