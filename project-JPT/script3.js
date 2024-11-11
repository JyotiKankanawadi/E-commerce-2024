const stripe = stripe('your-publishable-key-here');
const elements = stripe.elements();

const card = elements.create('card', { style: { base: { fontSize: '16px' } } });
card.mount('#card-element');

const form = document.getElementById('checkout-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { token, error } = await stripe.createToken(card);

    if (error) {
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = error.message;
    } else {
        handleToken(token);
    }
});

function handleToken(token) {
    console.log('Received Stripe token:', token);

    alert('Payment successful!');
}