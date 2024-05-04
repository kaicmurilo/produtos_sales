import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() userData: { username: string; password: string }) {
    return this.authService.register(userData);
  }

  @Post('login')
  login(@Body() credentials: { username: string; password: string }) {
    return this.authService.login(credentials.username, credentials.password);
  }
}
