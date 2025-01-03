import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

/**
 * Setup Swagger documentation as middleware.
 */
const swaggerSetup = (app) => {
  const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'My API',
        version: '1.0.0',
        description: 'API documentation for my app',
      },
      servers: [
        {
            url: process.env.PROD_URL || `http://localhost:${process.env.PORT || 3000}`,
        },
      ],
    },
    apis: ['./src/routes/*.js'], // Path to your route files for JSDoc comments
  };

  const swaggerDocs = swaggerJSDoc(swaggerOptions);

  // Set up Swagger UI as a middleware at /api-docs
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  console.log("Swagger documentation available at /swagger");
};

export default swaggerSetup;
