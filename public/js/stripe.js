const stripe = Stripe('pk_test_51Lg8L6DUiPg1wVsNBwBZWqoQ0mFiEVI1pc19sr4ygoBFkHrD9XVzfavLTLnsMvRLmKsckAPXzL1AngBE0ieolizA00sSz9vEvy')

const bookTour = async (tourId) => {
    //1) Get the check out session from API
    try {
        const session = await axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/api/v1/booking/checkout-session/${tourId}`,
        });
        console.log(session);

        // 2) Create ckeckout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err)
    }

};

const bookBtn = document.getElementById('book-tour');

if (bookBtn)
    bookBtn.addEventListener('click', e => {
        e.target.textContent = 'Processing...'
        const { tourId } = e.target.dataset;
        console.log(tourId)
        bookTour(tourId);
    });
