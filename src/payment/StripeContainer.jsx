
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import PaymentForm from "./PaymentForm";

function StripeContainer() {

const [stripePromise, setStripePromise] = useState(null);
const [clientSecret, setClientSecret] = useState("");

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL

useEffect(() => {

    const fetchData = async () => {
        try {
            const response = await fetch(`${baseURL}/stripe/config`);
            const { publishableKey } = await response.json();
            setStripePromise(loadStripe(publishableKey))
            console.log(publishableKey)
        } catch (err) {
            console.error('Error fetching Stripe config:', err);
        };
    }; 

    fetchData()
}, []);

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

    console.log({
        clientSecret: clientSecret,
        publishableKey: stripePromise,
    })
    

return (
    <>
        {clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={{clientSecret}}>
                <PaymentForm/>
            </Elements>
        )}
    </>
)
};

export default StripeContainer;