import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import * as httpMock from 'node-mocks-http';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should can say hello', async () => {
    const response = await controller.sayHello('Junia', 'Zahra');
    expect(response).toBe('Hello Junia Zahra');
  });

  it('should can view template', async () => {
    const response = httpMock.createResponse();
    controller.viewHello('Junia', response);

    expect(response._getRenderView()).toBe('index.html');
    expect(response._getRenderData()).toEqual({
      title: 'Hello World',
      name: 'Junia',
    });
  });
});
