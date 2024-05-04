import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthCredentialsDto } from 'src/functions/dtos';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registrar um novo usuário' })
  @ApiBody({ type: AuthCredentialsDto })
  register(@Body() userData: AuthCredentialsDto) {
    return this.authService.register(userData);
  }

  @Post('login')
  @ApiOperation({ summary: 'Realizar login' })
  @ApiBody({ type: AuthCredentialsDto })
  login(@Body() credentials: AuthCredentialsDto) {
    return this.authService.login(credentials.username, credentials.password);
  }
}
