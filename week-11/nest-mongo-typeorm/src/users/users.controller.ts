import { Body, Controller, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDTO } from './dto/login-user.dto';
import express from 'express';

@Controller('api')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('signup')
  async register(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @Post('signin')
  async login(
    @Body() body: LoginUserDTO,
    @Res({ passthrough: true }) res: express.Response,
  ) {
    const { access_token, refresh_token, user } =
      await this.userService.loginUser(body);
    res.cookie('refreshToken', refresh_token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return {
      message: 'Login Successfully',
      access_token,
      data: { id: user.id, name: user.name, email: user.email },
    };
  }
}
