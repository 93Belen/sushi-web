import { loadStripe } from "@stripe/stripe-js";

export async function checkout(lineItems) {
    let stripePrmoise = null;

    const getStripe = () => {
        if(!stripePrmoise){
            stripePrmoise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
        }
        return stripePrmoise;
    }
    const stripe = await getStripe();


    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin,
        customFields: [
            {
              key: 'pickup-time',
              label: {type: 'custom', custom: 'Pick-Up Time'},
              type: 'time',
            },
          ],
    })
}