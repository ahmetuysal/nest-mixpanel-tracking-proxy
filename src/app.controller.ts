import {
  Controller,
  Get,
  StreamableFile,
  Header,
  Req,
  Res,
  Post,
} from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { FastifyRequest, FastifyReply } from 'fastify';
import { MixpanelService } from './mixpanel/mixpanel.service';

@Controller()
export class AppController {
  constructor(private readonly mixpanelService: MixpanelService) {}

  @Get('lib.js')
  @Header('Content-Type', 'text/javascript')
  @Header('Content-Disposition', 'inline')
  mixpanelJsLib(): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), 'lib/mixpanel/mixpanel-2-latest.js'),
    );
    return new StreamableFile(file);
  }

  @Get('lib.min.js')
  @Header('Content-Type', 'text/javascript')
  @Header('Content-Disposition', 'inline')
  mixpanelJsLibMinified(): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), 'lib/mixpanel/mixpanel-2-latest.min.js'),
    );
    return new StreamableFile(file);
  }

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
