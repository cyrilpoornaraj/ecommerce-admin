import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});

// var instance = new Razorpay({
//     key_id: 'YOUR_KEY_ID',
//     key_secret: 'YOUR_KEY_SECRET',
//   });