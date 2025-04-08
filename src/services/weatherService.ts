import { WeatherResponse } from "../types/weather.js";
import apiClient from "../utils/apiClient.js";

const getWeatherByCity = async (
  city: string,
  country?: string
): Promise<WeatherResponse | { error: string }> => {
  try {
    const response = await apiClient.get<WeatherResponse>("/weather", {
      params: {
        q: country ? `${city},${country}` : city,
      },
    });

    return response.data;
  } catch {
    return { error: "Error fetching weather" };
  }
};

const weatherService = {
  getWeatherByCity,
};

export default weatherService;
