import process from "node:process";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const API_OPENWEATHERMAP_URL = "https://api.openweathermap.org/data/2.5";
export const API_OPENWEATHERMAP_KEY = process.env.OPENWEATHERMAP_API_KEY ?? "";
