import { Category } from "@/app/types";
import { fetchAPI } from "../lib/api";

export const getAllCategories = async (): Promise<Category[]> => {
    return await fetchAPI<Category[]>("/categories");
};