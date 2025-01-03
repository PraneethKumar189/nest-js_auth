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
    const accessToken =

    }

    async signupLocal(dto:AuthDTO):Promise<Tokens>{
        const hash = await this.hashData(dto.password)
        const newUser = this.prisma.user.create({
            data:{
                email:dto.email,
                hash
            }
        })
  
    }

    signinLocal(){}

    logout(){}

    refreshTokens(){}


}
