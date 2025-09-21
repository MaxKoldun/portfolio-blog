import * as SendGrid from '@sendgrid/mail';
import { EmailRequestType } from './types';

export class SendgridService {
  private static instance: SendgridService;
  private from: string;
  private to: string;

  constructor() {
    if (SendgridService.instance) {
      throw new Error('Use SendgridService.getInstance() instead of new.');
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const from = process.env.MAIL_FROM;
    const to = process.env.MAIL_TO;

    if (!apiKey) {
      throw new Error('SENDGRID_API_KEY is not set');
    }

    if (!from) {
      throw new Error('MAIL_FROM is not set');
    }

    if (!to) {
      throw new Error('MAIL_TO is not set');
    }

    this.from = from;
    this.to = to;

    SendGrid.setApiKey(apiKey);
  }

  public static getInstance(): SendgridService {
    if (!SendgridService.instance) {
      SendgridService.instance = new SendgridService();
    }
    return SendgridService.instance;
  }

  private mapMailRequest() {}

  async send(body: EmailRequestType): Promise<void> {
    await SendGrid.send({
      to: this.to,
      from: this.from,
      subject: body.subject,
      html: body.html,
    });
  }
}
