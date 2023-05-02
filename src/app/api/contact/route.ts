import mail from "@sendgrid/mail";
import { NextResponse } from "next/server";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

type ResponseData = {
  status?: number;
  message?: string;
};

export async function POST(request: Request) {
  let response: ResponseData = {};
  const body = await request.json();
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "adam-ksiazek@outlook.com",
    from: "adamksiazek123@gmail.com",
    subject: "Porfolio Contact Message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  try {
    await mail.send(data);
    response = {
      status: 200,
      message: "Thank you for your message.",
    };
  } catch (err) {
    response = {
      status: 500,
      message:
        "Message could not be delivered, please try again later or shoot me a DM via LinkedIn / copy my email address.",
    };
  }

  return NextResponse.json(response);
}
