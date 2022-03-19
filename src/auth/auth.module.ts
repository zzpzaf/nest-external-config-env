//import { forwardRef, Module } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DbRepo } from 'src/dataObjects/dbRepo';
//import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    //forwardRef(() => UsersModule),
  ],
  controllers: [AuthController],
  providers: [AuthService, DbRepo],
  exports: [DbRepo],
})
export class AuthModule {}
