import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, email, sector, need, budget, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !need) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    await transporter.verify();

    // Email to you (notification)
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Sector:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${sector || "Not selected"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${budget || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Project Need:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${need}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 10px;">${message || "Not provided"}</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the user
    if (process.env.SEND_CONFIRMATION === "true") {
      const confirmationMail = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: "Thank you for contacting us!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a2e;">Thank you for reaching out, ${name}!</h2>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
            <h3 style="color: #1a1a2e;">Your submission details:</h3>
            <p><strong>Project Need:</strong> ${need}</p>
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
            <p>Best regards,<br/>The Team</p>
          </div>
        `,
      };
      await transporter.sendMail(confirmationMail);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}