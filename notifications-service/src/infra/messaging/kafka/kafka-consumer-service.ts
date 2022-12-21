import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['adequate-eft-12254-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'YWRlcXVhdGUtZWZ0LTEyMjU0JJr2LMf6IiNVNi5eXRN_Mn6iZJbtd5KVUqBWNhw',
          password: 'b8025cbfef5041668eb491f4f76e51ad',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
