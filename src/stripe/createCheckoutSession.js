import { db } from "../firebase-config";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import initializeStripe from "./initializeStripe";

async function createCheckoutSession(uid, cart, clearCart) {
  const collectionRef = collection(db, `users/${uid}/checkout_sessions`);

  // Create a new checkout session in the subollection inside this users document
  const checkoutSessionRef = await addDoc(collectionRef, {
    mode: "payment",
    success_url: `${window.location.origin}/checkout-success`,
    cancel_url: `${window.location.origin}/cart`,
    collect_shipping_address: true,
    line_items: cart.map(({ priceId, quantity }) => ({
      price: priceId,
      quantity,
    })),
  });

  // Wait for the CheckoutSession to get attached by the extension
  onSnapshot(checkoutSessionRef, async (snap) => {
    const { sessionId } = snap.data();
    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = await initializeStripe();
      const result = await stripe.redirectToCheckout({ sessionId });
      // result.then((test) => {
      //   clearCart();
      // });
      // await clearCart();
      console.log(result);
    }
  });
}

export default createCheckoutSession;
