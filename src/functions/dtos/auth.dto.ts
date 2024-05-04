import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty({ example: 'user123', description: 'O nome de usuário' })
  username: string;

  @ApiProperty({ example: 'password123', description: 'A senha' })
  password: string;
}
