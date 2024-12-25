import { Injectable } from '@nestjs/common';

@Injectable()
export class Connection {
    getName(): string {
        return null;
    }
}

@Injectable()
export class PostgresConnection extends Connection {
    getName(): string {
        return 'Postgres';
    }
}

@Injectable()
export class MongoDBConnection extends Connection {
    getName(): string {
        return 'MongoDB';
    }
}