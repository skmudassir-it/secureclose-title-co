import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote-schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please fix the highlighted fields.",
        errors: parsed.error.issues.map((i) => ({
          path: i.path.join("."),
          message: i.message,
        })),
      },
      { status: 400 }
    );
  }

  const { name, email, service, propertyType } = parsed.data;
  console.info(
    `Quote request from ${name} <${email}> for ${service} (${propertyType})`
  );

  return NextResponse.json({
    success: true,
    message: `Thanks, ${name.split(" ")[0]}! Your quote request is in — our closing team will reach out within one business day.`,
    received: {
      name,
      email,
      service,
      propertyType,
      at: new Date().toISOString(),
    },
  });
}
