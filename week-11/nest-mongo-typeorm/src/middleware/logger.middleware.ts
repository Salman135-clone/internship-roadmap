import {
  NestMiddleware,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

export interface UserPayload {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

interface RequestWithPayload extends Request {
  user?: UserPayload;
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: RequestWithPayload, res: Response, next: NextFunction) {
    let token: string | undefined;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      throw new UnauthorizedException('Authentization header is missing');
    }
    try {
      const decode = this.jwtService.verify<UserPayload>(token);
      req.user = decode;
      console.log(decode);
      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid or expire token', {
        cause: err as Error,
      });
    }
  }
}
