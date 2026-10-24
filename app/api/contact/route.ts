import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  return NextResponse.json({ status: "active", message: "SMTP API proxy is ready." });
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: name, email, or message" },
        { status: 400 }
      );
    }

    // Configure transporter using SMTP credentials from environment
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "peepmeela@gmail.com",
        pass: process.env.SMTP_PASS || "",
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER || "peepmeela@gmail.com"}>`,
      to: process.env.SMTP_TO || "peepmeela@gmail.com",
      replyTo: email,
      subject: `New Message from ${name} via Portfolio Contact Form`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
          <h2 style="color: #a855f7; border-bottom: 1px solid #ddd; padding-bottom: 8px;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #a855f7; border-radius: 4px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error: any) {
    console.error("Nodemailer SMTP Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to send message via SMTP server." },
      { status: 500 }
    );
  }
}
