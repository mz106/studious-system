import apiService from "./productService";

export const getAllProducts = async () => {
  try {
    const data = await apiService.get(`/products/`);
    return data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
