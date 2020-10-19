import React, { Component } from "react";
import Nav from "../src/components/Nav";
import CustomerTable from "../src/components/CustomerTable";
import MerchantTable from "./components/MerchantTable";
import ItemsTable from "./components/ItemsTable";
import InvoiceTable from "./components/InvoicesTable";
import InvoiceBox from "./components/InvoiceBox";
import InvoiceItemsTable from "./components/InvoiceItemsTable";
import TransactionsTable from "./components/TransactionsTable"; 
import WelcomeCard from "./components/WelcomeCard"; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [
        // {
        //   id: 1,
        //   attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" },
        // },
        // {
        //   id: 2,
        //   attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" },
        // },
        // {
        //   id: 3,
        //   attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" },
        // },
        // {
        //   id: 4,
        //   attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" },
        // },
        // {
        //   id: 5,
        //   attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" },
        // },
        // {
        //   id: 6,
        //   attributes: { first_name: "Sylvester", id: 5, last_name: "Nader" },
        // },
      ],
      merchants: [
        // { id: 1, attributes: { id: 1, name: "Williamson Group" } },
        // { id: 2, attributes: { id: 2, name: "Williamson Group" } },
        // { id: 3, attributes: { id: 3, name: "Williamson Group" } },
        // { id: 4, attributes: { id: 4, name: "Williamson Group" } },
        // { id: 5, attributes: { id: 5, name: "Williamson Group" } },
      ],
      items: [
        // {
        //   id: 1,
        //   attributes: {
        //     description:
        //       "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
        //     id: 1,
        //     merchant_id: 1,
        //     name: "Item Qui Esse",
        //     unit_price: "751.07",
        //   },
        // },
        // {
        //   id: 2,
        //   attributes: {
        //     description:
        //       "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
        //     id: 2,
        //     merchant_id: 1,
        //     name: "Item Qui Esse",
        //     unit_price: "751.07",
        //   },
        // },
        // {
        //   id: 3,
        //   attributes: {
        //     description:
        //       "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
        //     id: 3,
        //     merchant_id: 1,
        //     name: "Item Qui Esse",
        //     unit_price: "751.07",
        //   },
        // },
        // {
        //   id: 4,
        //   attributes: {
        //     description:
        //       "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
        //     id: 4,
        //     merchant_id: 1,
        //     name: "Item Qui Esse",
        //     unit_price: "751.07",
        //   },
        // },
        // {
        //   id: 5,
        //   attributes: {
        //     description:
        //       "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
        //     id: 5,
        //     merchant_id: 1,
        //     name: "Item Qui Esse",
        //     unit_price: "751.07",
        //   },
        // },
        // {
        //   id: 6,
        //   attributes: {
        //     description:
        //       "Nihil autem sit odio inventore deleniti. Est laudantium ratione distinctio laborum. Minus voluptatem nesciunt assumenda dicta voluptatum porro.",
        //     id: 6,
        //     merchant_id: 1,
        //     name: "Item Qui Esse",
        //     unit_price: "751.07",
        //   },
        // },
      ],
      invoiceItems: [
        // {
        //   id: 1,
        //   attributes: {
        //     id: 1,
        //     invoice_id: 1,
        //     item_id: 4,
        //     quantity: 7,
        //     unit_price: "791.40",
        //   },
        // },
        // {
        //   id: 2,
        //   attributes: {
        //     id: 2,
        //     invoice_id: 1,
        //     item_id: 4,
        //     quantity: 7,
        //     unit_price: "791.40",
        //   },
        // },
        // {
        //   id: 3,
        //   attributes: {
        //     id: 3,
        //     invoice_id: 1,
        //     item_id: 4,
        //     quantity: 7,
        //     unit_price: "791.40",
        //   },
        // },
        // {
        //   id: 4,
        //   attributes: {
        //     id: 4,
        //     invoice_id: 1,
        //     item_id: 4,
        //     quantity: 7,
        //     unit_price: "791.40",
        //   },
        // },
        // {
        //   id: 5,
        //   attributes: {
        //     id: 5,
        //     invoice_id: 1,
        //     item_id: 4,
        //     quantity: 7,
        //     unit_price: "791.40",
        //   },
        // },
      ],
      invoices: [
        // {
        //   id: 1,
        //   attributes: {
        //     customer_id: 1,
        //     id: 1,
        //     merchant_id: 4,
        //     status: "shipped",
        //   },
        // },
        // {
        //   id: 2,
        //   attributes: {
        //     customer_id: 1,
        //     id: 2,
        //     merchant_id: 4,
        //     status: "shipped",
        //   },
        // },
        // {
        //   id: 3,
        //   attributes: {
        //     customer_id: 1,
        //     id: 3,
        //     merchant_id: 4,
        //     status: "shipped",
        //   },
        // },
        // {
        //   id: 4,
        //   attributes: {
        //     customer_id: 1,
        //     id: 4,
        //     merchant_id: 4,
        //     status: "shipped",
        //   },
        // },
        // {
        //   id: 5,
        //   attributes: {
        //     customer_id: 1,
        //     id: 5,
        //     merchant_id: 4,
        //     status: "shipped",
        //   },
        // },
        // {
        //   id: 6,
        //   attributes: {
        //     customer_id: 1,
        //     id: 5,
        //     merchant_id: 2,
        //     status: "shipped",
        //   },
        // },
      ],
      transactions: [
        // {
        //   id: 1,
        //   attributes: {
        //     credit_card_number: "4844518708741275",
        //     id: 5,
        //     invoice_id: 3,
        //     result: "success",
        //   },
        // },
        // {
        //   id: 2,
        //   attributes: {
        //     credit_card_number: "4844518708741275",
        //     id: 5,
        //     invoice_id: 3,
        //     result: "success",
        //   },
        // },

        // {
        //   id: 3,
        //   attributes: {
        //     credit_card_number: "4844518708741275",
        //     id: 5,
        //     invoice_id: 3,
        //     result: "success",
        //   },
        // },
        // {
        //   id: 4,
        //   attributes: {
        //     credit_card_number: "4844518708741275",
        //     id: 5,
        //     invoice_id: 3,
        //     result: "success",
        //   },
        // },
        // {
        //   id: 5,
        //   attributes: {
        //     credit_card_number: "4844518708741275",
        //     id: 5,
        //     invoice_id: 3,
        //     result: "success",
        //   },
        // },
      ],
      error: "",
      complete: true,
    };
  }

  checkComplete = () => {
    if (
      this.state.customers.length &&
      this.state.merchants.length &&
      this.state.items.length &&
      this.state.invoiceItems.length &&
      this.state.invoices.length &&
      this.state.transactions.length
    ) {
      this.setState({ complete: true });
    }
  };

  async componentDidMount() {
    fetch("https://back-engine.herokuapp.com/api/v1/customers")
      .then((response) => {
        if (!response.ok) {
          throw Error("There was an error");
        }
        return response.json();
      })
      .then((allData) => {
        this.setState({ customers: allData.data });
        this.checkComplete()
      })
      .catch((err) => {
        throw Error(err);
      });
    fetch("https://back-engine.herokuapp.com/api/v1/merchants")
      .then((response) => {
        if (!response.ok) {
          throw Error("There was an error");
        }
        return response.json();
      })
      .then((allData) => {
        this.setState({ merchants: allData.data });
        this.checkComplete()
      })
      .catch((err) => {
        throw Error(err);
      });
    fetch("https://back-engine.herokuapp.com/api/v1/items")
      .then((response) => {
        if (!response.ok) {
          throw Error("There was an error");
        }
        return response.json();
      })
      .then((allData) => {
        this.setState({ items: allData.data });
        this.checkComplete()
      })
      .catch((err) => {
        throw Error(err);
      });
    fetch("https://back-engine.herokuapp.com/api/v1/invoices")
      .then((response) => {
        if (!response.ok) {
          throw Error("There was an error");
        }
        return response.json();
      })
      .then((allData) => {
        this.setState({ invoices: allData.data });
        this.checkComplete()
      })
      .catch((err) => {
        throw Error(err);
      });
    // fetch("https://back-engine.herokuapp.com/api/v1/invoice_items")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error("There was an error");
    //     }
    //     return response.json();
    //   })
    //   .then((allData) => {
    //     this.setState({ invoiceItems: allData.data });
    //     this.checkComplete()
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
    //     this.checkComplete()
    //   })
    //   .catch((err) => {
    //     throw Error(err);
    //   });
  }

  render() {
    return (
      <>
        <Nav />
        <WelcomeCard />
        {this.state.complete && (
          <CustomerTable customers={this.state.customers} />
        )}
        {this.state.complete && (
          <MerchantTable merchants={this.state.merchants} />
        )}
        {this.state.complete && (
          <ItemsTable
            items={this.state.items}
            merchants={this.state.merchants}
          />
        )}
        {this.state.invoiceItems && (
          <InvoiceItemsTable
            invoiceItems={this.state.invoiceItems}
            invoices={this.state.invoices}
            items={this.state.items}
          />
        )}
        {this.state.complete && (
          <InvoiceTable
            invoices={this.state.invoices}
            customers={this.state.customers}
            merchants={this.state.merchants}
          />
        )}
        {/* {this.state.invoices && <InvoiceBox invoices={this.state.invoices} customers={this.state.customers} merchants={this.state.merchants} />} */}
        {this.state.complete && (
          <TransactionsTable
            transactions={this.state.transactions}
            customers={this.state.customers}
            merchants={this.state.merchants}
            invoices={this.state.invoices}
            invoiceItems={this.state.invoiceItems}
            items={this.state.items}
          />
        )}
      </>
    );
  }
}

export default App;
