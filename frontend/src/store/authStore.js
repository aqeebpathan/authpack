import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signup: async (username, email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/signup`, {
        username,
        email,
        password,
      });
      set({ user: res.data.user, isAuthenticated: true, isLoading: false });
      return res.data;
    } catch (error) {
      set({
        error: error.response.data.message || "Error while signing up.",
        isLoading: false,
      });
      throw error;
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      set({
        isAuthenticated: true,
        user: res.data.user,
        error: null,
        isLoading: false,
      });
      return res.data;
    } catch (error) {
      set({
        error: error.response.data.message || "Error while signing in.",
        isLoading: false,
      });
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      set({
        user: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Error while Logging out", isLoading: false });
      throw error;
    }
  },

  verifyEmail: async (code) => {
    {
      set({ isLoading: true, error: null });
    }
    try {
      const res = await axios.post(`${API_URL}/verify-email`, { code });
      set({ user: res.data.user, isAuthenticated: true, isLoading: false });
      return res.data;
    } catch (error) {
      set({
        error: error.response.data.message || "Error verifying email",
        isLoading: false,
      });
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const res = await axios.get(`${API_URL}/check-auth`);
      set({
        user: res.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const res = await axios.post(`${API_URL}/forgot-password`, { email });
      set({
        message: res.data.message,
        isLoading: false,
      });
      return res.data.message;
    } catch (error) {
      set({
        isLoading: false,
        error:
          error.response.data.message || "Error sending reset password email",
      });
      throw error;
    }
  },

  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/reset-password/${token}`, {
        password,
      });
      set({ message: res.data.message, isLoading: false });
    } catch (error) {
      set({
        error: error.response.data.message || "Error while resetting password",
        isLoading: false,
      });
      throw error;
    }
  },

  resendVerification: async (email) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const res = await axios.post(`${API_URL}/resend-verification`, { email });
      set({ message: res.data.message, isLoading: false });
    } catch (error) {
      set({
        error: error.response.data.message || "Error sending verification code",
        isLoading: false,
      });
      throw error;
    }
  },
}));
