import { AuthController, SessionController } from "./generated/controllers";
import { AuthServiceImpl, SessionServiceImpl } from "./services";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [
    AuthController,
    SessionController,
  ],
  providers: [
    AuthServiceImpl,
    SessionServiceImpl,
  ],
})
export class AppModule {}
