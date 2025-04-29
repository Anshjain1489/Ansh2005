document.addEventListener("DOMContentLoaded", function () {
    const checkIn = document.getElementById("checkIn");
    const checkOut = document.getElementById("checkOut");
    const quantity = document.getElementById("Quantity");
    const price = document.getElementById("Price");
    const amount = document.getElementById("Amount");
    const bookingId = document.getElementById("BookingId");
    const bookingDate = document.getElementById("BookingDate");
    const form = document.getElementById("form-booking");
    const payment = document.getElementById("pay");

    function redirectToPayment() {
        document.location.href = "payment.html";
    }

    bookingId.value = Math.floor(100000 + Math.random() * 900000);
    bookingDate.value = new Date().toISOString().split("T")[0];

    checkIn.addEventListener("change", function () {
        checkOut.min = checkIn.value;
    });

    checkOut.addEventListener("change", function () {
        if (checkOut.value <= checkIn.value) {
            alert("Check-out date must be after Check-in date!");
            checkOut.value = "";
        }
    });

    function calculateAmount() {
        const qty = parseFloat(quantity.value) || 0;
        const priceVal = parseFloat(price.value) || 0;
        amount.value = qty * priceVal;
    }

    quantity.addEventListener("input", calculateAmount);
    price.addEventListener("input", calculateAmount);
    amount.readOnly = true;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Payment processing...");

        setTimeout(() => {
            redirectToPayment();
        }, 1000);

        const bookingDetails = {
            bookingId: bookingId.value,
            checkIn: checkIn.value,
            checkOut: checkOut.value,
            quantity: quantity.value,
            price: price.value,
            amount: amount.value,
            bookingDate: bookingDate.value
        };

        console.log("Booking Details:", bookingDetails);
    });
});

localStorage.setItem("bookingId", bookingId.value);
localStorage.setItem("amount", amount.value);
localStorage.setItem("checkIn", checkIn.value);
localStorage.setItem("checkOut", checkOut.value);
localStorage.setItem("quantity", quantity.value);
localStorage.setItem("price", price.value);
localStorage.setItem("bookingDate", bookingDate.value);