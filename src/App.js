import React, { Component } from "react";
import Nav from "../src/components/Nav";
import CustomerTable from "../src/components/CustomerTable";
import MerchantTable from "./components/MerchantTable";
import ItemsTable from "./components/ItemsTable";
import InvoiceTable from "./components/InvoicesTable";
import InvoiceItemsTable from "./components/InvoiceItemsTable";
import TransactionsTable from "./components/TransactionsTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [
        { attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" } },
        { attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" } },
        { attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" } },
        { attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" } },
        { attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" } },
        { attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" } },
      ],
      merchants: [
        { attributes: { name: "Williamson Group" } },
        { attributes: { name: "Williamson Group" } },
        { attributes: { name: "Williamson Group" } },
        { attributes: { name: "Williamson Group" } },
        { attributes: { name: "Williamson Group" } },
      ],
      items: [
        {
          attributes: {
            description:
              "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
            id: 1,
            merchant_id: 1,
            name: "Item Qui Esse",
            unit_price: "751.07",
          },
        },
        {
          attributes: {
            description:
              "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
            id: 1,
            merchant_id: 1,
            name: "Item Qui Esse",
            unit_price: "751.07",
          },
        },
        {
          attributes: {
            description:
              "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
            id: 1,
            merchant_id: 1,
            name: "Item Qui Esse",
            unit_price: "751.07",
          },
        },
        {
          attributes: {
            description:
              "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
            id: 1,
            merchant_id: 1,
            name: "Item Qui Esse",
            unit_price: "751.07",
          },
        },
        {
          attributes: {
            description:
              "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
            id: 1,
            merchant_id: 1,
            name: "Item Qui Esse",
            unit_price: "751.07",
          },
        },
        {
          attributes: {
            description:
              "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
            id: 1,
            merchant_id: 1,
            name: "Item Qui Esse",
            unit_price: "751.07",
          },
        },
      ],
      invoiceItems: [
        {
          attributes: {
            id: 5,
            invoice_id: 1,
            item_id: 529,
            quantity: 7,
            unit_price: "791.40",
          },
        },
        {
          attributes: {
            id: 5,
            invoice_id: 1,
            item_id: 529,
            quantity: 7,
            unit_price: "791.40",
          },
        },
        {
          attributes: {
            id: 5,
            invoice_id: 1,
            item_id: 529,
            quantity: 7,
            unit_price: "791.40",
          },
        },
        {
          attributes: {
            id: 5,
            invoice_id: 1,
            item_id: 529,
            quantity: 7,
            unit_price: "791.40",
          },
        },
        {
          attributes: {
            id: 5,
            invoice_id: 1,
            item_id: 529,
            quantity: 7,
            unit_price: "791.40",
          },
        },
      ],
      invoices: [
        {
          attributes: {
            customer_id: 1,
            id: 5,
            merchant_id: 41,
            status: "shipped",
          },
        },
        {
          attributes: {
            customer_id: 1,
            id: 5,
            merchant_id: 41,
            status: "shipped",
          },
        },
        {
          attributes: {
            customer_id: 1,
            id: 5,
            merchant_id: 41,
            status: "shipped",
          },
        },
        {
          attributes: {
            customer_id: 1,
            id: 5,
            merchant_id: 41,
            status: "shipped",
          },
        },
        {
          attributes: {
            customer_id: 1,
            id: 5,
            merchant_id: 41,
            status: "shipped",
          },
        },
        {
          attributes: {
            customer_id: 1,
            id: 5,
            merchant_id: 41,
            status: "shipped",
          },
        },
      ],
      transactions: [
        {
          attributes: {
            credit_card_number: "4844518708741275",
            id: 5,
            invoice_id: 6,
            result: "success",
          },
        },
        {
          attributes: {
            credit_card_number: "4844518708741275",
            id: 5,
            invoice_id: 6,
            result: "success",
          },
        },
        {
          attributes: {
            credit_card_number: "4844518708741275",
            id: 5,
            invoice_id: 6,
            result: "success",
          },
        },
        {
          attributes: {
            credit_card_number: "4844518708741275",
            id: 5,
            invoice_id: 6,
            result: "success",
          },
        },
        {
          attributes: {
            credit_card_number: "4844518708741275",
            id: 5,
            invoice_id: 6,
            result: "success",
          },
        },
      ],
      error: "",
    };
  }

  async componentDidMount() {
    // fetch("https://back-engine.herokuapp.com/api/v1/customers")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error("There was an error");
    //     }
    //     return response.json();
    //   })
    //   .then((allData) => {
    //     this.setState({ customers: allData.data });
    //   })
    //   .catch((err) => {
    //     throw Error(err);
    //   });

    // fetch("https://back-engine.herokuapp.com/api/v1/merchants")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error("There was an error");
    //     }
    //     return response.json();
    //   })
    //   .then((allData) => {
    //     this.setState({ merchants: allData.data });
    //   })
    //   .catch((err) => {
    //     throw Error(err);
    //   });

    // fetch("https://back-engine.herokuapp.com/api/v1/items")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error("There was an error");
    //     }
    //     return response.json();
    //   })
    //   .then((allData) => {
    //     this.setState({ items: allData.data });
    //   })
    //   .catch((err) => {
    //     throw Error(err);
    //   });

    // fetch("https://back-engine.herokuapp.com/api/v1/invoices")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error("There was an error");
    //     }
    //     return response.json();
    //   })
    //   .then((allData) => {
    //     this.setState({ invoices: allData.data });
    //   })
    //   .catch((err) => {
    //     throw Error(err);
    //   });

    // fetch("https://back-engine.herokuapp.com/api/v1/invoice_items")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error("There was an error");
    //     }
    //     return response.json();
    //   })
    //   .then((allData) => {
    //     this.setState({ invoiceItems: allData.data });
    //   })
    //   .catch((err) => {
    //     throw Error(err);
    //   });

    // fetch("https://back-engine.herokuapp.com/api/v1/transactions")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error("There was an error");
    //     }
    //     return response.json();
    //   })
    //   .then((allData) => {
    //     this.setState({ transactions: allData.data });
    //   })
    //   .catch((err) => {
    //     throw Error(err);
    //   });
  }

  render() {
    return (
      <>
        <Nav />
        {this.state.customers && (
          <CustomerTable customers={this.state.customers} />
        )}
        {this.state.merchants && (
          <MerchantTable merchants={this.state.merchants} />
        )}
        {this.state.items && <ItemsTable items={this.state.items} />}
        {this.state.invoiceItems && (
          <InvoiceItemsTable invoiceItems={this.state.invoiceItems} />
        )}
        {this.state.invoices && <InvoiceTable invoices={this.state.invoices} />}
        {this.state.transactions && (
          <TransactionsTable transactions={this.state.transactions} />
        )}
      </>
    );
  }
}

export default App;
