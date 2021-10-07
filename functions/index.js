const functions = require("firebase-functions");
const express = require("express");
const shortid = require("shortid");
const Razorpay = require("razorpay");
// const stripe = require("stripe")("sk_test_51J7uhbSI5Fq9ofyyENtBFGFd2Lv0wOgUYA2WHr0RzZe3hBiePGGnwlmfdPCiCVJCSgzFUTYsAtOlW3kmdEeffiQu003NOhoePI");

const app = express();
const cors = require("cors");
app.use(cors({origin: true}));
app.use(express.json());


const razorpay = new Razorpay({
  key_id: "rzp_test_sxMLHxxJqzpodO",
  key_secret: "ucJx1SIXpJNYWtYPYvNul8yS",
});
app.get("*", (req, res) => {
  res.status(404).send("404, Not found.");
});


app.post("/razorpay", async (req, res)=>{
  try {
    const amountt =req.body.amounttt;
    const payment_capture =1;
    const amount = amountt;
    const currency = "INR";
    const options = {
      amount: (amount*100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.send(response);
  } catch (err) {
    console.log(err);
  }
}
);

// app.listen(1337, ()=>{
//   console.log("listen on 1337")
// })

// app.post("/payments/create", async (req, res) => {
//   try {
//     const {amount, shipping} = req.body;
//     const paymentIntent =await stripe.paymentIntents.create({
//       shipping,
//       amount,
//       currency: "inr",
//       description: "asondk",
//     });

//     res
//         .status(200)
//         .send(paymentIntent.client_secret);
//   } catch (err) {
//     res
//         .status(500)
//         .json({
//           statusCode: 500,
//           message: err.message,
//         });
//   }
// });

exports.api = functions.https.onRequest(app);

