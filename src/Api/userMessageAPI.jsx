import axios from "axios";
import { API_URL_BASE } from "../utils/apiURL";

export const userMessage = async (data) => {
  try {
    let result = await axios(`${API_URL_BASE}/userPortfolioMessage`,
      {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: data,
      });
    return result;
  } catch (error) {
    console.log(error);
  }
};

