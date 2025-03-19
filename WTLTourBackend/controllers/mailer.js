const nodemailer = require("nodemailer");

const sendOrderConfirmationEmail = async (
  email,
  name,
  mobile,
  journeyDate,
  selectedSeats,
  availableSeats,
  bookingSeats
) => {
  try {
    if (!email || email.trim() === "") {
      throw new Error("Recipient email is missing or invalid.");
    }

    console.log("📧 Sending email to:", email); // Debugging log

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Booking Confirmation - Thank You for Your Booking Seats!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2c3e50;">Thank You for Your Booking!</h2>
            <p>Hello ${name},</p>
            <p>Your booking is successful. Below are the details of your booking:</p>
    
            <h3 style="color: #16a085;">Booking Details:</h3>
    
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <thead>
                    <tr style="background-color: #f8f9fa;">
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Name</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Email</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Mobile</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Journey Date</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Selected Seat</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Available Seat</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Booking Seats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${email}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${mobile}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${journeyDate}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${selectedSeats}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${availableSeats}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${bookingSeats}</td>
                    </tr>
                </tbody>
            </table>
    
            <hr style="border: 0; border-top: 1px solid #ddd;" />
    
            <p>We truly appreciate your business and look forward to serving you again.</p>
            <p>If you have any questions, feel free to contact us at <a href="mailto:contact@worldtriplink.com">contact@worldtriplink.com</a>.</p>
    
            <p style="font-size: 14px; color: #777;">Best Regards,<br><strong>WorldTripLink</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Order confirmation email sent successfully");

    // Send Email Notification to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to admin
      subject: "New Booking Received",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #007bff;"> New Booking Notification</h2>
            <p>Hello Admin,</p>
            <p>A new order has been placed by <strong>${email}</strong>. Please review the booking details below:</p>
            
            <h3 style="margin-top: 20px; border-bottom: 2px solid #007bff; padding-bottom: 5px;">Booking Summary</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background-color: #f8f9fa;">
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Name</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Email</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Mobile</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Journey Date</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Selected Seat</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Available Seat</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Booking Seats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${email}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${mobile}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${journeyDate}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${selectedSeats}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${availableSeats}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${bookingSeats}</td>
                    </tr>
                </tbody>
            </table>
            
            <p style="margin-top: 20px;">Please review the booking details in the admin panel.</p>
            <p>Best regards,<br><strong>WorldTripLink</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    console.log("✅ Booking notification email sent to admin successfully");

  } catch (error) {
    console.error("❌ Error sending email:", error.message);
  }
};

module.exports = sendOrderConfirmationEmail;
