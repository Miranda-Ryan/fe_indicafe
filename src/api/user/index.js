import { AxiosInstance } from "../../util/AxiosInstance";

export const createUser = async (user, token) => {
  const { email, sub } = user;
  const _id = sub.split("|")[1];
  const payload = { _id, email };
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const result = await AxiosInstance.post("/api/users", payload, { headers });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
