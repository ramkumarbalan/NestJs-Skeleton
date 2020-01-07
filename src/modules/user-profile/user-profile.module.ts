import { Module } from '@nestjs/common';
import { UserProfileController } from './user-profile.controller';

@Module({
  controllers: [UserProfileController]
})
export class UserProfileModule {}
