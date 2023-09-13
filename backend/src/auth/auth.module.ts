// Base
import { Module } from '@nestjs/common';

// Actual Module
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

// Other Modules
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

// Misc
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [UserService, AuthService, JwtStrategy],
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
