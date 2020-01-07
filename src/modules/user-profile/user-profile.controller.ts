import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { userProfileService } from '../../client/clients';
import { Logger } from '@nestjs/common';
const logger = new Logger('GateWay Service');
@Controller('user-profile')
export class UserProfileController {

    @Get('all-users')
    getAllUser() {
        return userProfileService.send<string, string[]>('all-users', []);
    }

    @Post('create')
    createUser(@Req() req) {
       return userProfileService.send<string, object>('create', req.body);
    }
}
