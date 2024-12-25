import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

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

export function createConnection(configService: ConfigService): Connection {
    if (configService.get('DATABASE') === 'postgres') {
        return new PostgresConnection();
    } else {
        return new MongoDBConnection();
    }
}