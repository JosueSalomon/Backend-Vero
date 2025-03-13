import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Vero API',
        version: '1.0.0',
        description: 'API para manejo de Vero',
        contact: {
          name: 'Equipo Vero'
        },
        servers: [
          {
            url: 'http://localhost:4000',
            description: 'Local server'
          },
          {
            url: 'https://backend-vero.vercel.app/',
            description: 'Vercel server'
          }
        ]
      }
    },
    apis: [
      './src/Controllers/*.ts', // Ruta correcta para los controladores
      './src/Routes/*.ts', // Ruta correcta para las rutas
      './src/Models/*.ts'  // Ruta correcta para los modelos
    ]
  };
  
  const specs = swaggerJsdoc(options);
  export default specs;
  