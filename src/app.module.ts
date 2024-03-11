import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { LoggerModule } from './logger/logger.module';
import { LoggerInterface } from './logger/logger.interface';
import { ArtistModule } from './artist/artist.module';
import { ArtistController } from './artist/artist.controller';
import { ArtworkModule } from './artwork/artwork.module';
import { ArtworkController } from './artwork/artwork.controller';

const optionsLog: Record<string, LoggerInterface[]> = {
  logs: LoggerMiddleware.getLogs(),
};

@Module({
  imports: [LoggerModule.register(optionsLog), ArtistModule, ArtworkModule],
  controllers: [AppController, ArtistController, ArtworkController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
