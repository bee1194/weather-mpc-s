import { MCPTool } from "mcp-framework";
import { z } from "zod";

import weatherService from "../services/weatherService.js";
import { WeatherResponse } from "../types/weather.js";

interface GetWeatherByCityInput {
  city: string;
  country?: string;
}

class GetWeatherByCityTool extends MCPTool<GetWeatherByCityInput> {
  name = "get-weather-by-city";
  description = "Get weather information for a specific city";

  schema = {
    city: {
      type: z.string(),
      description: "City name to get weather for",
    },
    country: {
      type: z.string().optional(),
      description: "Country code to get weather for",
    },
  };

  async execute(
    input: GetWeatherByCityInput
  ): Promise<WeatherResponse | { error: string }> {
    const { city, country } = input;

    return await weatherService.getWeatherByCity(city, country);
  }
}

export default GetWeatherByCityTool;
