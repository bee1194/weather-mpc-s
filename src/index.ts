import { MCPServer } from "mcp-framework";

const server = new MCPServer({
  name: "weather-mcp-s",
  version: "1.0.0",
});

server.start();
