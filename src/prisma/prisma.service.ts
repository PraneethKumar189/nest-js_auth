import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { url } from 'inspector';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit,OnModuleDestroy {

    constructor(){
        super({
         datasources:{
            db:{
                url:"postgresql://postgres:tatvamasi@localhost:5432/authtest?schema=public",
            },
         }
        });

    }
   async onModuleInit() {
       await this.$connect()
    }
    async onModuleDestroy() {
      await  this.$disconnect()
    }

}
