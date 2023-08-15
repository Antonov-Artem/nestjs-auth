import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

export interface IUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private user: UserService) {}

  async register(email: string, password: string) {
    const user = this.user.create(email, password);

    if (user) return user;

    return null;
  }

  async validate(email: string, password: string) {
    const user = await this.user.findByEmail(email);

    if (user && user.password === password) {
      const { password, ...res } = user;

      return res;
    }

    return null;
  }
}
