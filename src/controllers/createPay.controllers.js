const stripe = require("stripe")(process.env.sec);
module.exports = (req, res) => {
  const { email, amount, description } = req.body;
  stripe.customers
    .create({
      email,
    })
    .then((customer) => {
      return stripe.invoiceItems
        .create({
          customer: customer.id,
          amount: amount, // 25
          currency: "usd",
          description: description,
        })
        .then((invoiceItem) => {
          return stripe.invoices.create({
            collection_method: "send_invoice",
            customer: invoiceItem.customer,
          });
        })
        .then((invoice) => {
          console.log(invoiceItem);

          // New invoice created on a new customer
        })
        .catch((err) => {
          // Deal with an error
        });
    });
};
