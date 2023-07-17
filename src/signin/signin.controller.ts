import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SigninService } from './signin.service';
import { CreateSigninDto } from './dto/create-signin.dto';
import { UpdateSigninDto } from './dto/update-signin.dto';

@Controller('signin')
export class SigninController {
  constructor(private readonly signinService: SigninService) {}

  @Post()
  create(@Body() createSigninDto: CreateSigninDto) {
    return this.signinService.create(createSigninDto);
  }
}
