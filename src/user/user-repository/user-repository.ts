import { Connection } from '../connection/connection';

export class UserRepository {
  connectioon: Connection;

  save() {
    console.info(`Saving user with connection ${this.connectioon.getName()}`);
  }
}

export function createUserRepository(connection: Connection): UserRepository {
  const repository = new UserRepository();
  repository.connectioon = connection;
  return repository;
}
