import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const initializeStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

export default initializeStripe;
