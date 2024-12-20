// File: config/swagger.js
// Description: Configuration for Swagger API documentation
// Location: config folder

import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      version: "1.0.0",
      description: "API documentation for the Blog project",
    },
    servers: [
      {
        url: "http://localhost:8000", // Replace with your server URL
      },
    ],
  },
  apis: ["./routers/*.js"], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
