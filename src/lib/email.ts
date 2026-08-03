/**
 * Transactional Email Helper for Vriksh Vani
 * Powered by Resend API (or synthetic logger when RESEND_API_KEY is not set)
 */

interface SendWaitlistEmailParams {
  to: string;
  name: string;
  queuePosition: number;
  referralCode: string;
  colorway: string;
}

interface SendContactTicketEmailParams {
  to: string;
  name: string;
  subject: string;
  ticketId: string;
  reason: string;
}

export async function sendWaitlistConfirmationEmail(params: SendWaitlistEmailParams) {
  const { to, name, queuePosition, referralCode, colorway } = params;
  const apiKey = process.env.RESEND_API_KEY;

  const html = `
    <div style="font-family: system-ui, sans-serif; background-color: #070B08; color: #F7F6F2; padding: 40px 20px;">
      <div style="max-w: 500px; margin: 0 auto; background-color: #0F2B18; border: 1px solid rgba(138, 215, 76, 0.2); border-radius: 16px; padding: 32px;">
        <h1 style="color: #8AD74C; margin-top: 0; font-size: 24px;">Welcome to Vriksh Vani Batch 01</h1>
        <p style="color: #A3B18A; font-size: 16px; line-height: 1.6;">Hello ${name},</p>
        <p style="color: #A3B18A; font-size: 16px; line-height: 1.6;">Your reservation for the NIH-01 Nature Intelligence Hub (${colorway}) is confirmed!</p>
        
        <div style="background-color: #070B08; padding: 20px; border-radius: 12px; margin: 24px 0; text-align: center;">
          <p style="color: #A3B18A; font-size: 12px; text-transform: uppercase; margin: 0;">Your Queue Position</p>
          <p style="color: #E8D07C; font-size: 36px; font-weight: bold; margin: 8px 0;">#${queuePosition}</p>
          <p style="color: #8AD74C; font-size: 13px; font-family: monospace; margin: 0;">Referral Code: ${referralCode}</p>
        </div>

        <p style="color: #A3B18A; font-size: 14px; line-height: 1.6;">Share your referral link with friends to move up in line: <a href="https://vrikshvani.vercel.app/referral" style="color: #8AD74C;">vrikshvani.vercel.app/referral</a></p>
        <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 24px 0;" />
        <p style="color: #A3B18A; font-size: 12px; text-align: center;">Vriksh Vani Technologies Pvt. Ltd. · Bengaluru, India</p>
      </div>
    </div>
  `;

  if (!apiKey || apiKey.startsWith('re_REPLACE')) {
    console.log('[Email Simulation] Waitlist email generated:', { to, queuePosition, referralCode });
    return { success: true, simulated: true };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || 'Vriksh Vani <hello@vrikshvani.com>',
        to: [to],
        subject: `🌿 Your NIH-01 Waitlist Reservation (#${queuePosition})`,
        html,
      }),
    });

    if (!res.ok) throw new Error(`Resend API error: ${res.statusText}`);
    return { success: true, simulated: false };
  } catch (err: any) {
    console.error('[Email Error] Failed to send waitlist email:', err.message);
    return { success: false, error: err.message };
  }
}

export async function sendContactTicketConfirmationEmail(params: SendContactTicketEmailParams) {
  const { to, name, subject, ticketId, reason } = params;
  const apiKey = process.env.RESEND_API_KEY;

  const html = `
    <div style="font-family: system-ui, sans-serif; background-color: #070B08; color: #F7F6F2; padding: 40px 20px;">
      <div style="max-w: 500px; margin: 0 auto; background-color: #0F2B18; border: 1px solid rgba(232, 208, 124, 0.2); border-radius: 16px; padding: 32px;">
        <h1 style="color: #E8D07C; margin-top: 0; font-size: 22px;">Support Ticket Received</h1>
        <p style="color: #A3B18A; font-size: 15px; line-height: 1.6;">Hello ${name},</p>
        <p style="color: #A3B18A; font-size: 15px; line-height: 1.6;">We have received your message regarding <strong>${subject}</strong> (Department: ${reason.toUpperCase()}).</p>
        
        <div style="background-color: #070B08; padding: 16px; border-radius: 12px; margin: 20px 0;">
          <p style="color: #A3B18A; font-size: 12px; text-transform: uppercase; margin: 0;">Ticket Reference ID</p>
          <p style="color: #8AD74C; font-size: 18px; font-family: monospace; font-weight: bold; margin: 4px 0;">${ticketId}</p>
        </div>

        <p style="color: #A3B18A; font-size: 14px; line-height: 1.6;">Our support team will review your inquiry and reply within 1–2 business days.</p>
        <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 24px 0;" />
        <p style="color: #A3B18A; font-size: 12px; text-align: center;">Vriksh Vani Support · status.vrikshvani.com</p>
      </div>
    </div>
  `;

  if (!apiKey || apiKey.startsWith('re_REPLACE')) {
    console.log('[Email Simulation] Contact ticket email generated:', { to, ticketId });
    return { success: true, simulated: true };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || 'Vriksh Vani Support <support@vrikshvani.com>',
        to: [to],
        subject: `[Ticket #${ticketId}] Support Request Received: ${subject}`,
        html,
      }),
    });

    if (!res.ok) throw new Error(`Resend API error: ${res.statusText}`);
    return { success: true, simulated: false };
  } catch (err: any) {
    console.error('[Email Error] Failed to send contact email:', err.message);
    return { success: false, error: err.message };
  }
}
