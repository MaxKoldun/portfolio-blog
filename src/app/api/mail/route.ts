import { NextRequest, NextResponse } from 'next/server';
import { SendgridService } from '@/services';

export async function POST(req: NextRequest) {
  const sendgridService = SendgridService.getInstance();

  const body = await req.json();

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  try {
    await sendgridService.send({
      subject: body.subject,
      html: message.replace(/\r\n/g, '<br>'),
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
