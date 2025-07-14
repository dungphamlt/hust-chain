import { DocumentBuilder } from '@nestjs/swagger';

export default new DocumentBuilder()
  .setTitle('HustChain API')
  .setDescription('Blockchain-based Education Platform API')
  .setVersion('1.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    },
    'jwt-auth', // Tên security scheme
  )
  .addCookieAuth('refresh_token')
  .build();