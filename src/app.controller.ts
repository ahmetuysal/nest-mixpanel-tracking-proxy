import { Controller, Get, Req, Res, Post } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { MixpanelService } from './mixpanel/mixpanel.service';

@Controller()
export class AppController {
  constructor(private readonly mixpanelService: MixpanelService) {}

  @Get('*')
  mixpanelApiGetRequest(
    @Req() request: FastifyRequest,
    @Res({ passthrough: true }) reply: FastifyReply,
  ) {
    return this.mixpanelService.sendToMixpanel(request, reply, 'GET');
  }

  @Post('*')
  mixpanelApiPostRequest(
    @Req() request: FastifyRequest,
    @Res({ passthrough: true }) reply: FastifyReply,
  ): Promise<unknown> {
    return this.mixpanelService.sendToMixpanel(request, reply, 'POST');
  }
}
