const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");
const BASE_URL =
  "http://localhost:5000" ?? "https://real-time-seven.vercel.app/";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat App API",
      version: "1.0.0",
      description: "API documentation for Chat App using Swagger",
    },
    servers: [
      {
        url: `${BASE_URL}/api`, // adjust if deployed
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/*.js")], // scan your routes folder
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
