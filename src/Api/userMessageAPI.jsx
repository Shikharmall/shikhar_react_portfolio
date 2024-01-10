import axios from "axios";

export const userMessage = async (data) => {
  console.log(data);
  try {
    let result = await axios(
      "https://ddbackend-8ve4.onrender.com/userPortfolioMessage",
      {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: data,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
