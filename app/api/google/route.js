import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const secret_key = process.env.RECAPTCHA_SECRET_KEY; // Use secure env variable

    if (!secret_key) {
      return NextResponse.json({
        error: "reCAPTCHA secret key is missing!",
        success: false,
      }, { status: 500 });
    }

    const res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      new URLSearchParams({
        secret: secret_key,
        response: reqBody.token,
      }).toString(),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    if (res.data.success) {
      return NextResponse.json({
        message: "Captcha verification success!!",
        success: true,
      });
    }

    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status: 400 });
  } catch (error) {
    console.error("reCAPTCHA Error:", error);
    return NextResponse.json({
      error: "Internal server error",
      success: false,
    }, { status: 500 });
  }
}
