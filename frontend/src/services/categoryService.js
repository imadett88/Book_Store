import http from "./http";

export const getAllCategories = async () => {
  return await http.get("/categories");
};

export const addCategories = async (c) => {
  return await http.post("/categories", c);
};
