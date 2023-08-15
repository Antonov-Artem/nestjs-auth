import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(ctx: ExecutionContext) {
    const res = (await super.canActivate(ctx)) as boolean;

    const req = ctx.switchToHttp().getRequest();

    await super.logIn(req);

    return res;
  }
}
