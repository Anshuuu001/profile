import API from "./axios";

// 📊 Get Analytics Data
export const getAnalytics = async () => {
  const response = await API.get("/analytics");
  return response.data;
};

// 👁 Add View Count
export const addView = async () => {
  const response = await API.post("/analytics/view");
  return response.data;
};

// ❤️ Add Like
export const addLike = async () => {
  const response = await API.post("/analytics/like");
  return response.data;
};