import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private prisma:PrismaService,private jwtservice:JwtService){}

    hashData(data:string){
         return bcrypt.hash(data,10);
    }

   async getTokens(userId:number,email:string){
    const [at,rt]= await Promise.all([
        this.jwtservice.signAsync({
            sub:userId,
            email,
        },{
            secret:'rt-secret',
            expiresIn:60*60*24*7,
            
        }),
        this.jwtservice.signAsync({
            sub:userId,
            email,
        },{expiresIn:60*15,
            
        })

    ]);

    return {
        access_token:at,
        refresh_token:rt
    }


    }

    async signupLocal(dto:AuthDTO):Promise<Tokens>{
        const hash = await this.hashData(dto.password)
        const newUser = this.prisma.user.create({
            data:{
                email:dto.email,
                hash
            }
        })

        const tokens = await this.getTokens((await newUser).id,(await newUser).email)

        return  tokens;
  
    }

    signinLocal(){}

    logout(){}

    refreshTokens(){}


}
