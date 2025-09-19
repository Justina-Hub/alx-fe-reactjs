import axios from "axios";

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`, // ✅ uses env key
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
