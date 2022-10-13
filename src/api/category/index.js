import { AxiosInstance } from "../../util/AxiosInstance";

export const getCategoryList = async () => {
  try {
    const result = await AxiosInstance.get("/api/categories");
    return result;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js ~ line 12 ~ getCategoryList ~ error",
      error
    );
    throw error;
  }
};

export const createCategory = async (name) => {
  try {
    const result = await AxiosInstance.post("/api/categories", { name });
    return result;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js ~ line 28 ~ createCategory ~ error",
      error
    );
    throw error;
  }
};
