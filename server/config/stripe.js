import dotenv from "dotenv";
dotenv.config();
import stripe from "stripe";
export const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
export default stripe;
