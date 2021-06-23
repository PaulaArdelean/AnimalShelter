import { Module } from '@nestjs/common';
import { AnimalsModule } from './animals/animals.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventStoreModule } from './shared/event-store/event-store.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ 
    EventStoreModule.forRoot(),
    UsersModule, 
    AnimalsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
