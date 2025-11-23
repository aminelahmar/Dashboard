import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getAttendance = () => api.get("/attendance");
export const addRFIDScan = (id) => api.post("/rfid", { id });
export const addFaceMatch = (studentId) => api.post("/face", { studentId });
