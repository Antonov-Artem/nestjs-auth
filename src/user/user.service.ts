import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (user) return user;

    return null;
  }

  async create(email: string, password: string) {
    const hash = password;

    const user = await this.prisma.user.create({
      data: { email: email, password: hash },
    });

    if (user) return user;

    return null;
  }
}
