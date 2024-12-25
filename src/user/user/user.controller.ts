import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(private service: UserService) {}
  
  @Get('/hello')
  async sayHello(
    @Query('name') name: string,
  ): Promise<string> {
    return this.service.sayHello(name);
  }

  @Get('/view-hello')
  viewHello(@Query('name') name: string, @Res() response: Response) {
    response.render('index.html', {
      title: 'Hello World',
      name: name,
    });
  }

  @Get('/set-cookie')
  setCookie(@Query() name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send('Cookie set');
  }

  @Get('/get-cookie')
  getCookie(@Req() request: Request) {
    return request.cookies['name'];
  }

  @Get('/sample')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return { message: 'This is a sample response' };
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return { url: 'https://nestjs.com', statusCode: 301 };
  }


  @Get('/:id')
  getById(@Param('id') id: string): string {
    return `GET ${id}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/get')
  get(): string {
    return 'GET';
  }
}
