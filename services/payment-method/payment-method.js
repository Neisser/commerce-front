
import axios from 'axios';
import { baseApi, baseLocalApi } from 'helpers/constants';
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe("pk_test_51IQn0BIQ4GGI940duq6iA5yljbPxiUUFzAYoOBo8QydsHTGMDnX88vBmOnrcYkWAXzko9Sg5P7jPiD3OPri2XjwT00oovFNDV4");

export const payStripes = async (payload) => {
  const stripe = await stripePromise;
  console.log(`${baseLocalApi}/orders`);
  const response = await axios.post(`${baseLocalApi}/orders`, payload);
  if ([200, 201].includes(response.status)) {
    const body = response.data.Body;
    const result = await stripe.redirectToCheckout({ sessionId: body.session.id })
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.log(result.error);
    }
    console.log(result)
    return {};
  } else {
    throw new Error(response.error);
  }
}
