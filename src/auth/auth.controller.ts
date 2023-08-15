import {
  Body,
  Get,
  Post,
  Request,
  UseGuards,
  Controller,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthenticatedGuard } from './authenticated.guard';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    return await this.auth.register(email, password);
  }

  @Get('logout')
  logout(@Request() req) {
    req.session.destroy();
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('me')
  me(@Request() req) {
    return { ...req.user };
  }
}
