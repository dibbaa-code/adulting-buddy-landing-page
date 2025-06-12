import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSignup = await adminDb
      .collection("alpha-sign-ups")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (!existingSignup.empty) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Save to Firestore
    const docRef = await adminDb.collection("alpha-sign-ups").add({
      email,
      createdAt: new Date(),
      timestamp: Date.now(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Successfully signed up! We'll be in touch soon.",
        id: docRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving signup:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
