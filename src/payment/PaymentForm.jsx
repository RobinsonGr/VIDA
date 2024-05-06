import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@mui/material";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);
  const [showButton, setShowButton] = useState(false);

  setTimeout(() => {
    setShowButton(true);
  }, 2500);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement/>
      {showButton && (
         <Button
         sx={{ marginTop: '19px' }}
         onClick={handleSubmit}
         variant="contained"
         color="primary"
         size="large"
         disabled={isProcessing || !stripe || !elements}
       >
         {isProcessing ? "Processing ..." : "Pay now"}
       </Button>
      )}
    </form>
  );
};