import { Injectable } from '@nestjs/common';
import { CreateSigninDto } from './dto/create-signin.dto';
import { UpdateSigninDto } from './dto/update-signin.dto';

@Injectable()
export class SigninService {
  create(createSigninDto: CreateSigninDto) {
    return 'This action adds a new signin';
  }
}
