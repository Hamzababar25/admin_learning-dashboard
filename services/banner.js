import { api } from "@/lib/api";

export const getBanners = async () => {
  try {
    const response = await api.get("/admin/banners");
    if (response.status !== 200) {
      throw new Error("Failed to fetch banners");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error;
  }
};

export const getBannerById = async (id) => {
  try {
    const response = await api.get(`/admin/banner/${id}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch banner");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching banner:", error);
    throw error;
  }
};

export const addBanner = async (formData) => {
  try {
    const response = await api.post("/admin/banner/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status !== 201) {
      throw new Error(response.data?.message || "Failed to create banner");
    }
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("Error creating banner:", errorMessage);
    throw new Error(errorMessage);
  }
};

export const updateBanner = async (id, formData) => {
  try {
    const response = await api.put(`/admin/${id}/update`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status !== 200) {
      throw new Error(response.data?.message || "Failed to update banner");
    }
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("Error updating banner:", errorMessage);
    throw new Error(errorMessage);
  }
};

export const deleteBanner = async (id) => {
  try {
    const response = await api.delete(`/admin/${id}/delete`);
    if (response.status !== 200) {
      throw new Error("Failed to delete banner");
    }
    return response.data;
  } catch (error) {
    console.error("Error deleting banner:", error);
    throw error;
  }
};
