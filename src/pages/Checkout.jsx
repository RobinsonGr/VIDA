import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutPage = ({ cartItems }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    // Handle payment submission using Stripe API
    const result = await stripe.confirmCardPayment('{YOUR_API_SECRET}', {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'randomName xd',
        },
      },
    });

    if (result.error) {
      console.error(result.error.message);
      // Handle payment error
    } else {
      // Payment succeeded, handle success
      console.log(result.paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Display cart items */}
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}

      {/* Stripe CardElement for collecting payment info */}
      <CardElement />

      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutPage;
