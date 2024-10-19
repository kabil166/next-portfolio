// Example: pages/api/send-email.js
import { sendEmail } from '../helper'; // Import your sendEmail function

export async function POST(req) {
  try {
    const { name, email, message } = await req.json(); // Parse JSON body

    // Ensure you check the parsed data
    console.log('Parsed data:', { name, email, message }); // Log the parsed data for debugging

    // Validate received data
    if (!email || !name || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400, // Bad request
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const emailResponse = await sendEmail(name, email, message);

    if (emailResponse?.MessageId) {
      return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}