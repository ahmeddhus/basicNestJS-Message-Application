import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  // Pipe to validate the data sending to the sever and before the controllers.
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
