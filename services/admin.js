import { api } from "@/lib/api";
import { deleteCookie } from "cookies-next";

export const getAdminDetails = async () => {
  try {
    const response = await api.get("/admin/me");
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to fetch admin details",
      }
    );
  }
};

export const logoutAdmin = async () => {
  try {
    const response = await api.get("/admin/logout");
    if (response.data.success) {
      deleteCookie("saloonsession");
    }
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to logout",
      }
    );
  }
};
