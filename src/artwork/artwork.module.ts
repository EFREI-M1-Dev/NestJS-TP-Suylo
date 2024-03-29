import { Module } from '@nestjs/common';
import { ArtworkController } from './artwork.controller';
import { ArtworkService } from './artwork.service';

@Module({
  controllers: [ArtworkController],
  exports: [ArtworkService],
  providers: [ArtworkService],
})
export class ArtworkModule {}
