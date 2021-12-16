import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { FastifyRequest, FastifyReply } from 'fastify';
import { getClientIp } from '@supercharge/request-ip';
import { firstValueFrom } from 'rxjs';
import * as qs from 'qs';

@Injectable()
export class MixpanelService {
  constructor(private readonly httpService: HttpService) {}

  async sendToMixpanel(
    request: FastifyRequest,
    reply: FastifyReply,
    method: 'GET' | 'POST',
  ): Promise<unknown> {
    const path = request.url;

    const mixpanelUrl = path.startsWith('/decide')
      ? 'https://decide.mixpanel.com'
      : 'https://api.mixpanel.com';

    const response = await firstValueFrom(
      this.httpService.request({
        url: `${mixpanelUrl}${path}`,
        method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-REAL-IP': getClientIp(request),
        },
        params: request.params,
        data:
          request.body !== undefined && request.body !== null
            ? qs.stringify(request.body)
            : undefined,
      }),
    );

    // filter headers https://github.com/mixpanel/flask-tracking-proxy/blob/master/flask_proxy/app.py#L7-L10
    const replyHeaders = Object.fromEntries(
      Object.entries(response.headers).filter(
        ([key]) =>
          ![
            'content-encoding',
            'content-length',
            'transfer-encoding',
            'connection',
            'access-control-allow-credentials',
            'access-control-allow-origin',
          ].includes(key.toLowerCase()),
      ),
    );

    reply.headers(replyHeaders);
    reply.status(response.status);

    return response.data;
  }
}
