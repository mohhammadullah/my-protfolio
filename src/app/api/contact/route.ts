import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequestBody = {
  fullName?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

type ContactApiResponse = { success: true } | { error: string };

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(
  request: Request,
): Promise<NextResponse<ContactApiResponse>> {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured. Missing RESEND_API_KEY." },
        { status: 500 },
      );
    }

    let body: ContactRequestBody;
    try {
      body = (await request.json()) as ContactRequestBody;
    } catch {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 },
      );
    }

    const fullName =
      typeof body.fullName === "string" ? body.fullName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["gmhgazi92@gmail.com"],
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `New contact form submission\n\nFull Name: ${fullName}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <h2 style="margin:0 0 16px">New Portfolio Contact Submission</h2>
          <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;margin:8px 0 0">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || "Failed to send email. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
