import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authservice:AuthService){}

@Post('/local/signup')
signupLocal(){
    this.authservice.signupLocal();
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
