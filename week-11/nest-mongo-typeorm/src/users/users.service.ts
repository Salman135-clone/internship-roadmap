import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDTO } from './dto/login-user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async createUser(data: CreateUserDto) {
    const { name, email, password } = data;
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser)
      throw new ConflictException('User with this email already exists.');

    const hashPassword = await bcrypt.hash(password, 10);

    const result = await this.userRepository.save({
      name,
      email,
      password: hashPassword,
    });
    return {
      message: 'User Created Successfully',
      data: { name: result.name, email: result.email },
    };
  }

  async loginUser(data: LoginUserDTO) {
    const { email, password } = data;
    const existing = await this.userRepository.findOne({ where: { email } });

    if (!existing) throw new NotFoundException('User Not Found');

    const matchPassword = await bcrypt.compare(password, existing.password);

    if (!matchPassword) throw new UnauthorizedException('Invalid Credential');
    const token_payload = { id: existing.id, email: existing.email };

    const gen_access_token = this.jwtService.sign(token_payload);

    const gen_refresh_token = this.jwtService.sign(token_payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get<number>('JWT_REFRESH_EXPIRES'),
    });

    return {
      access_token: gen_access_token,
      refresh_token: gen_refresh_token,
      user: existing,
    };
  }
}
