import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_ADDRESS,   // Your Gmail address
    pass: process.env.GMAIL_PASSKEY,   // Your Gmail app password
  },
});

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload) {
  const { name, email, message: userMessage } = payload;
  
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,  // Sender address (your email)
    to: process.env.EMAIL_ADDRESS,    // Recipient address (your email)
    subject: `New Message From ${name}`, 
    text: userMessage,  // Plain text body
    html: generateEmailTemplate(name, email, userMessage),  // HTML email body
    replyTo: email,  // Reply-to address
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return { success: false, message: 'Failed to send email.' };
  }
}

// API route handler
export async function POST(request) {
  try {
    const payload = await request.json();
    const emailResponse = await sendEmail(payload);

    if (emailResponse.success) {
      return new Response(
        JSON.stringify({ success: true, message: emailResponse.message }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: emailResponse.message }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error.message);
    return new Response(
      JSON.stringify({ success: false, message: 'Server error occurred.' }),
      { status: 500 }
    );
  }
}
