import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body." },
      { status: 400 }
    );
  }

  const { name, email, message } = body;

  // Presence validation
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json(
      { error: "Name is required." },
      { status: 400 }
    );
  }

  if (!email || typeof email !== "string" || email.trim().length === 0) {
    return NextResponse.json(
      { error: "Email address is required." },
      { status: 400 }
    );
  }

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 }
    );
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // Length guards
  if (name.trim().length > 120) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }
  if (message.trim().length > 5000) {
    return NextResponse.json({ error: "Message is too long (max 5000 characters)." }, { status: 400 });
  }

  // In production this is where you would send an email (e.g. via Resend, SendGrid, etc.)
  console.log("[BrightCubes] New contact form submission:", {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    messageLength: message.trim().length,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      success: true,
      message: "Your message has been received. We will be in touch within one business day.",
    },
    { status: 200 }
  );
}
