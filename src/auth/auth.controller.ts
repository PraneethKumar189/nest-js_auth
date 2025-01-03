import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {

    constructor(private authservice:AuthService){}

@Post('/local/signup')
signupLocal(@Body() dto:AuthDTO):Promise<Tokens>{
    this.authservice.signupLocal(dto);
}


@Post('/local/signin')
signinlocal(){
    this.authservice.signinLocal();

}

@Post('/logout')
logout(){
    this.authservice.logout();
}

@Post('/refresh')
refreshTokens(){
    this.authservice.refreshTokens();
}


}
