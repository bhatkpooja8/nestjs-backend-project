import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) {}

    login(username:string) {
        const user ={
            id:1,
            username: username,
            role: 'admin'
        }
        const payload= {
            id: user.id,
            username: user.username,
            role: user.role
        }
        const token= this.jwtService.sign(payload)
        return {
            access_token: token
        }
    }
}
