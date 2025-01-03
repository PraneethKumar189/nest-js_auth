import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {

    constructor(private authservice:AuthService){}

@Post('/local/signup')
signupLocal(@Body() dto:AuthDTO){
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
