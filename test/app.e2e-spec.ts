import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('can say hello', async () => {
    const result = await request(app.getHttpServer())
      .get('/api/users/hello')
      .query({ first_name: 'Junia', last_name: 'Zahra' });

      expect(result.status).toBe(200);
      expect(result.text).toBe('Hello Junia Zahra');
  });

});
