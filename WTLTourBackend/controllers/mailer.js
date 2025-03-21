// const nodemailer = require("nodemailer");

// const sendOrderConfirmationEmail = async (
//   email,
//   name,
//   mobile,
//   journeyDate,
//   selectedSeats,
//   availableSeats,
//   bookingSeats,
//   isAcceptance = false, // Indicates whether this is an admin confirmation
// ) => {
//   try {
//     if (!email || email.trim() === "") {
//       throw new Error("Recipient email is missing or invalid.");
//     }

//     console.log(`📧 Sending ${isAcceptance ? "acceptance" : "admin notification"} email to:`, email); // Debugging log

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     if (isAcceptance) {
//       // Send acceptance email to the user
//       const customerSubject = "Booking Accepted - Your Seats Are Confirmed!";

//       const customerHtml = `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//             <h2 style="color: #2c3e50;">worldtriplink Ticket Information</h2>
//             <p>Hello ${name},</p>
//             <p>Thank you for booking your bus ticket with  <strong style="color: #16a085;">worldtriplink.in</strong> Here are the ticket details for your upcoming trip ${journeyDate}.</p>
            
//             <h3 style="color: #16a085;">Booking Details:</h3>
//             <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
//                 <thead>
//                     <tr style="background-color: #f8f9fa;">
//                         <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Name</th>
//                         <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Email</th>
//                         <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Mobile</th>
//                         <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Journey Date</th>
//                         <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Selected Seat</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
//                         <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${email}</td>
//                         <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${mobile}</td>
//                         <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${journeyDate}</td>
//                         <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${selectedSeats}</td>
//                     </tr>
//                 </tbody>
//             </table>
            
//             <hr style="border: 0; border-top: 1px solid #ddd;" />
//             <p>Your seats are now confirmed and reserved for your journey. We look forward to providing you with a comfortable travel experience.</p>
//             <p>If you have any questions or need to make changes to your booking, please contact us at <a href="mailto:contact@worldtriplink.com">contact@worldtriplink.com</a>.</p>
//             <p style="font-size: 14px; color: #777;">Best Regards,<br><strong>WorldTripLink</strong></p>
//         </div>
//       `;

//       const customerMailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email, // Send to the user
//         subject: customerSubject,
//         html: customerHtml,
//       };

//       await transporter.sendMail(customerMailOptions);
//       console.log("✅ Acceptance email sent successfully to customer");

//       // Send admin a notification about the acceptance
//       const adminAcceptanceMailOptions = {
//         from: process.env.EMAIL_USER,
//         to: process.env.EMAIL_USER, // Send to admin
//         subject: "Booking Accepted Confirmation",
//         html: `
//           <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//               <h2 style="color: #16a085;">Booking Acceptance Confirmation</h2>
//               <p>Hello Admin,</p>
//               <p>This is a confirmation that you have accepted the booking for <strong>${name}</strong>.</p>
              
//               <h3 style="margin-top: 20px; border-bottom: 2px solid #16a085; padding-bottom: 5px;">Accepted Booking Details</h3>
//               <table style="width: 100%; border-collapse: collapse;">
//                   <thead>
//                       <tr style="background-color: #f8f9fa;">
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Name</th>
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Email</th>
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Mobile</th>
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Journey Date</th>
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Selected Seat</th>
//                       </tr>
//                   </thead>
//                   <tbody>
//                       <tr>
//                           <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
//                           <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${email}</td>
//                           <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${mobile}</td>
//                           <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${journeyDate}</td>
//                           <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${selectedSeats}</td>
//                       </tr>
//                   </tbody>
//               </table>
              
//               <p style="margin-top: 20px;">A confirmation email has been sent to the customer.</p>
//               <p>Best regards,<br><strong>WorldTripLink</strong></p>
//           </div>
//         `,
//       };

//       await transporter.sendMail(adminAcceptanceMailOptions);
//       console.log("✅ Acceptance confirmation email sent to admin successfully");
//     } else {
//       // Send Email Notification to Admin (for new bookings)
//       const adminMailOptions = {
//         from: process.env.EMAIL_USER,
//         to: process.env.EMAIL_USER, // Send to admin
//         subject: "New Booking Received",
//         html: `
//           <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//               <h2 style="color: #007bff;"> New Booking Notification</h2>
//               <p>Hello Admin,</p>
//               <p>A new order has been placed by <strong>${email}</strong>. Please review the booking details below:</p>
              
//               <h3 style="margin-top: 20px; border-bottom: 2px solid #007bff; padding-bottom: 5px;">Booking Summary</h3>
//               <table style="width: 100%; border-collapse: collapse;">
//                   <thead>
//                       <tr style="background-color: #f8f9fa;">
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Name</th>
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Email</th>
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Mobile</th>
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Journey Date</th>
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Selected Seat</th>
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Available Seat</th>
//                           <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Booking Seats</th>
//                       </tr>
//                   </thead>
//                   <tbody>
//                       <tr>
//                           <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
//                           <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${email}</td>
//                           <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${mobile}</td>
//                           <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${journeyDate}</td>
//                           <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${selectedSeats}</td>
//                           <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${availableSeats}</td>
//                           <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${bookingSeats}</td>
//                       </tr>
//                   </tbody>
//               </table>
              
//               <p style="margin-top: 20px;">Please review the booking details in the admin panel.</p>
//               <p>Best regards,<br><strong>WorldTripLink</strong></p>
//           </div>
//         `,
//       };

//       await transporter.sendMail(adminMailOptions);
//       console.log("✅ Booking notification email sent to admin successfully");
//     }
//   } catch (error) {
//     console.error("❌ Error sending email:", error.message);
//   }
// };

// module.exports = sendOrderConfirmationEmail;





const nodemailer = require("nodemailer");

const sendOrderConfirmationEmail = async (
  email,
  name,
  mobile,
  journeyDate,
  selectedSeats,
  availableSeats,
  bookingSeats,
  isAcceptance = false, // Indicates whether this is an admin confirmation
  isCancellation = false // Indicates whether this is a cancellation
) => {
  try {
    if (!email || email.trim() === "") {
      throw new Error("Recipient email is missing or invalid.");
    }

    console.log(`📧 Sending ${isCancellation ? "cancellation" : isAcceptance ? "acceptance" : "admin notification"} email to:`, email);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    if (isCancellation) {
      // Send cancellation email to the user
      const cancellationSubject = "Booking Cancelled - Your Seats Are Released";

      const cancellationHtml = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2c3e50;">worldtriplink.in Cancellation Notice</h2>
            <p>Hello ${name},</p>
            <p>We regret to inform you that your booking for the journey on <strong>${journeyDate}</strong> has been cancelled.</p>
            
            <h3 style="color: #16a085;">Cancellation Details:</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <thead>
                    <tr style="background-color: #f8f9fa;">
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Name</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Email</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Mobile</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Journey Date</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Selected Seat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${email}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${mobile}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${journeyDate}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${selectedSeats}</td>
                    </tr>
                </tbody>
            </table>
            
            <hr style="border: 0; border-top: 1px solid #ddd;" />
            <p>Your seats have been released, and any payments will be refunded as per our cancellation policy.</p>
            <p>If you have any questions, please contact us at <a href="mailto:worldtriplinkaim@gmail.com">worldtriplinkaim@gmail.com</a>.</p>
            <p style="font-size: 14px; color: #777;">Best Regards,<br><strong>WorldTripLink.in</strong></p>
        </div>
      `;

      const cancellationMailOptions = {
        from: process.env.EMAIL_USER,
        to: email, // Send to the user
        subject: cancellationSubject,
        html: cancellationHtml,
      };

      await transporter.sendMail(cancellationMailOptions);
      console.log("✅ Cancellation email sent successfully to customer");
    } else if (isAcceptance) {
      // Send acceptance email to the user
      const customerSubject = "Booking Accepted - Your Seats Are Confirmed!";

      const customerHtml = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2c3e50;">worldtriplink.in Ticket Information</h2>
            <p>Hello ${name},</p>
            <p>Thank you for booking your bus ticket with  <strong style="color: #16a085;">worldtriplink.in</strong> Here are the ticket details for your upcoming trip ${journeyDate}.</p>
            
            <h3 style="color: #16a085;">Booking Details:</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <thead>
                    <tr style="background-color: #f8f9fa;">
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Name</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Email</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Mobile</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Journey Date</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Selected Seat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${email}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${mobile}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${journeyDate}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${selectedSeats}</td>
                    </tr>
                </tbody>
            </table>
            
            <hr style="border: 0; border-top: 1px solid #ddd;" />
            <p>Your seats are now confirmed and reserved for your journey. We look forward to providing you with a comfortable travel experience.</p>
            <p>If you have any questions or need to make changes to your booking, please contact us at <a href="mailto:contact@worldtriplink.com">contact@worldtriplink.com</a>.</p>
            <p style="font-size: 14px; color: #777;">Best Regards,<br><strong>WorldTripLink.in</strong></p>
        </div>
      `;

      const customerMailOptions = {
        from: process.env.EMAIL_USER,
        to: email, // Send to the user
        subject: customerSubject,
        html: customerHtml,
      };

      await transporter.sendMail(customerMailOptions);
      console.log("✅ Acceptance email sent successfully to customer");
    } else {
      // Send admin notification for new bookings
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
              <p>Best regards,<br><strong>WorldTripLink.in</strong></p>
          </div>
        `,
      };

      await transporter.sendMail(adminMailOptions);
      console.log("✅ Booking notification email sent to admin successfully");
    }
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
  }
};

module.exports = sendOrderConfirmationEmail;