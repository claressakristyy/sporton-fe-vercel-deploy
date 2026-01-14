import { Bank } from "@/app/types";
import { fetchAPI } from "../lib/api";

export const getAllBanks = async (): Promise<Bank[]> => {
    return await fetchAPI<Bank[]>("/banks");
};