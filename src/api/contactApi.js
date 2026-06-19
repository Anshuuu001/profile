import API from "./axios";

// 📩 Send Contact Message
export const sendMessage = async (messageData) => {
  const response = await API.post("/contact", messageData);
  return response.data;
};

// 📬 Get All Messages (Admin)
export const getMessages = async () => {
  const response = await API.get("/contact");
  return response.data;
};

// ❌ Delete Message
export const deleteMessage = async (id) => {
  const response = await API.delete(`/contact/${id}`);
  return response.data;
};