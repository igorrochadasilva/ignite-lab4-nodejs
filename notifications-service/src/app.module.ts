import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
import { Module } from '@nestjs/common';

//Main module that import all app modules
@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
