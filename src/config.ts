const API_BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3001"
    : "https://coacha1.onrender.com";

export default API_BASE_URL;
