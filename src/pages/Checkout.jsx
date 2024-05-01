const express = require('express');
const stripe = require('stripe')('YOUR_SECRET_KEY'); // Initialize Stripe with your Secret Key
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/charge', async (req, res) => {
  const { paymentMethodId } = req.body;

  try {
    // Create a payment intent with the payment method ID
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method: paymentMethodId,
      amount: 1000, // Amount in cents (e.g., $10)
      currency: 'usd',
      confirmation_method: 'manual',
      confirm: true,
    });

    res.json({ success: true, paymentIntent }); // Send success response with payment intent
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors and send error response
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
