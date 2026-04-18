import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, suburb, message, source } = body;

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subjectMap: Record<string, string> = {
      contact: `New Contact Form Lead – ${name}`,
      calculator: `New Solar Calculator Lead – ${name}`,
    };

    const subject = subjectMap[source] ?? `New Lead from Coastal Solar Co – ${name}`;

    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a3a5c; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">⚡ New Lead – Coastal Solar Co</h1>
        </div>
        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;"><a href="mailto:${email}" style="color: #1a3a5c;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;"><a href="tel:${phone}" style="color: #1a3a5c;">${phone}</a></td>
            </tr>` : ""}
            ${suburb ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Suburb</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${suburb}</td>
            </tr>` : ""}
            ${message ? `
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #111827;">${message.replace(/\n/g, "<br>")}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #fff7ed; border-radius: 6px; border-left: 4px solid #f97316;">
            <p style="margin: 0; font-size: 14px; color: #92400e;">
              <strong>Action needed:</strong> Call ${name} back within 5 minutes to honour the callback guarantee.
            </p>
          </div>
          <p style="margin-top: 16px; font-size: 12px; color: #9ca3af;">
            Source: ${source ?? "website"} · ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })} AEST
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Coastal Solar Co Website" <${smtpUser}>`,
      to: smtpUser,
      replyTo: email,
      subject,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
