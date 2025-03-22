"use client";

import { useState } from "react";
import { setCookie, deleteCookie } from "cookies-next";
import { api } from "@/lib/api";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/admin/login", formData);

      if (!response.data.token) {
        throw new Error("Invalid credentials");
      }

      setCookie("saloonsession", response.data.token, {
        path: "/",
        secure: true,
        httpOnly: false,
        sameSite: "strict",
        maxAge: 120 * 24 * 60 * 60,
      });

      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
