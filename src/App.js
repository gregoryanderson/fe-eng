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
      customers: [],
      merchants: [],
      items: [],
      invoiceItems: [],
      invoices: [],
      transactions: [],
      error: "",
      complete: false,
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
    fetch("https://back-engine.herokuapp.com/api/v1/invoice_items")
      .then((response) => {
        if (!response.ok) {
          throw Error("There was an error");
        }
        return response.json();
      })
      .then((allData) => {
        this.setState({ invoiceItems: allData.data });
        this.checkComplete()
      })
      .catch((err) => {
        throw Error(err);
      });
    fetch("https://back-engine.herokuapp.com/api/v1/transactions")
      .then((response) => {
        if (!response.ok) {
          throw Error("There was an error");
        }
        console.log(response)
        return response.json();
      })
      .then((allData) => {
        this.setState({ transactions: allData.data });
        this.checkComplete()
      })
      .catch((err) => {
        throw Error(err);
      });
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
        {this.state.complete && (
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
