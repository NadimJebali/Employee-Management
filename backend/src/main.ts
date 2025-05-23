import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Project API')
    .setDescription('All API of Project Employee Management')
    .setVersion('1.0')
    .addTag('Project')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT', 
      },
      'access-token',
    )
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const corsOption = {
    origin: 'http://localhost:4200' ,
    optionsSuccessStatus: 200
  }
  app.enableCors(corsOption);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
