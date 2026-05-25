import stripe from "../config/stripe.js";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

export const stripeWebhook = async (req, res) => {
  console.log("========== WEBHOOK HIT ==========");

  const sig = req.headers["stripe-signature"];

  console.log("Signature:", sig ? "Present" : "Missing");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    console.log("Event Type:", event.type);

  } catch (error) {
    console.log("Webhook Verification Failed");
    console.log(error.message);

    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === "checkout.session.completed") {
    console.log("Checkout Session Completed");

    const session = event.data.object;

    console.log("Session Metadata:", session.metadata);

    const userId = session.metadata.userId;
    const credits = Number(session.metadata.credits);
    const plan = session.metadata.plan;

    console.log("User ID:", userId);
    console.log("Credits Bought:", credits);
    console.log("Plan:", plan);

    const user = await User.findById(userId);

    if (!user) {
      console.log("User not found in DB");

      return res.status(404).json({
        message: "User not found",
      });
    }

    console.log("Current Credits:", user.credits);

    user.credits += credits;
    user.plan = plan;

    await user.save();

    console.log("Updated Credits:", user.credits);
    console.log("User saved successfully");
  }

  console.log("Webhook Finished Successfully");

  return res.status(200).json({
    received: true,
  });
};
