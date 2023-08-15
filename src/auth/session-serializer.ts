import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { IUser } from './auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: IUser) => void) {
    done(null, user);
  }

  deserializeUser(payload: any, done: (err: Error, payload: any) => void) {
    done(null, payload);
  }
}
