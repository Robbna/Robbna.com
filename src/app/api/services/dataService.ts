import axios from "axios";
import { IData } from "@/app/common/types/Data";
import { ILocalizations } from "@/app/common/types/Localizations";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getData = async (): Promise<IData> => {
  const response = await axios.get(`${BASE_URL}/data.json`);
  return response.data;
};

export const getLocalizations = async (): Promise<ILocalizations[]> => {
  const response = await axios.get(`${BASE_URL}/localizations.json`);
  return response.data;
};
