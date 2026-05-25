import stripe from "../config/stripe.js";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

export const stripeWebhook = async (req, res) => {
  console.log("Webhook hit");

  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    console.log(event.type);

  } catch (error) {
    console.log(error.message);

    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    console.log(session.metadata);

    const userId = session.metadata.userId;
    const credits = Number(session.metadata.credits);
    const plan = session.metadata.plan;

    const user = await User.findById(userId);

    if (!user) {
      console.log("User not found");

      return res.status(404).json({
        message: "User not found",
      });
    }

    console.log("Before:", user.credits);

    user.credits += credits;
    user.plan = plan;

    await user.save();

    console.log("After:", user.credits);
    console.log("Saved");
  }

  return res.status(200).json({
    received: true,
  });
};
