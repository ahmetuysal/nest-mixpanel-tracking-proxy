import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MixpanelService } from './mixpanel/mixpanel.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [MixpanelService],
})
export class AppModule {}
