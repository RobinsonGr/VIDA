
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import PaymentForm from "./PaymentForm";

function StripeContainer() {
    // State to hold the Stripe promise and client secret
const [stripePromise, setStripePromise] = useState(null);
const [clientSecret, setClientSecret] = useState("");

    // Base URL for API requests
const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL

    // Fetch Stripe configuration on component mount
useEffect(() => {

    const fetchData = async () => {
        try {
            const response = await fetch(`${baseURL}/stripe/config`);
            const { publishableKey } = await response.json();
            setStripePromise(loadStripe(publishableKey))
        } catch (err) {
            console.error('Error fetching Stripe config:', err);
        };
    }; 

    fetchData()
}, []);

    // Fetch payment intent client secret
useEffect(() => {
 const fetchData = async () => {
        try {
            const response = await fetch(`${baseURL}/stripe/create-payment-intent`, {
                method: "POST",
                body: JSON.stringify({})
            });
            const { clientSecret } = await response.json();
            setClientSecret(clientSecret)
        } catch (err) {
            console.error('Error fetching Payment intent:', err);
        };
    }; 
fetchData();
         
    }, []);

    
    return (
        <>
        {/*Render payment form once client secret and stripe promise are available*/}
        {clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={{clientSecret}}>
                <PaymentForm/>
            </Elements>
        )}
    </>
)
};

export default StripeContainer;