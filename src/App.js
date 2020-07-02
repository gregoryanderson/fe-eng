import React, { Component } from "react";
import Nav from '../src/components/Nav'
import CustomerTable from '../src/components/CustomerTable'
import MerchantTable from './components/MerchantTable'
import ItemsTable from './components/ItemsTable'
import InvoiceTable from './components/InvoicesTable'
import InvoiceItemsTable from './components/InvoiceItemsTable'
import TransactionsTable from './components/TransactionsTable'




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
    };
  }

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
      }).catch(err => {
        throw Error(err)
      })
    
      fetch("https://back-engine.herokuapp.com/api/v1/merchants")
      .then((response) => {
        if (!response.ok) {
          throw Error("There was an error");
        }
        return response.json();
      })
      .then((allData) => {
        this.setState({ merchants: allData.data });
      }).catch(err => {
        throw Error(err)
      })

      fetch("https://back-engine.herokuapp.com/api/v1/items")
      .then((response) => {
        if (!response.ok) {
          throw Error("There was an error");
        }
        return response.json();
      })
      .then((allData) => {
        this.setState({ items: allData.data });
      }).catch(err => {
        throw Error(err)
      })

      fetch("https://back-engine.herokuapp.com/api/v1/invoices")
      .then((response) => {
        if (!response.ok) {
          throw Error("There was an error");
        }
        return response.json();
      })
      .then((allData) => {
        this.setState({ invoices: allData.data });
      }).catch(err => {
        throw Error(err)
      })

      fetch("https://back-engine.herokuapp.com/api/v1/invoice_items")
      .then((response) => {
        if (!response.ok) {
          throw Error("There was an error");
        }
        return response.json();
      })
      .then((allData) => {
        this.setState({ invoiceItems: allData.data });
      }).catch(err => {
        throw Error(err)
      })

      fetch("https://back-engine.herokuapp.com/api/v1/transactions")
      .then((response) => {
        if (!response.ok) {
          throw Error("There was an error");
        }
        return response.json();
      })
      .then((allData) => {
        this.setState({ transactions: allData.data });
      }).catch(err => {
        throw Error(err)
      })
  }

  render() {
    return (
      <>
        <Nav />
        {this.state.customers && <CustomerTable customers={this.state.customers}/>}
        {this.state.merchants && <MerchantTable merchants={this.state.merchants}/>}
        {this.state.items && <ItemsTable items={this.state.items}/>}
        {this.state.invoiceItems && <InvoiceItemsTable invoiceItems={this.state.invoiceItems}/>}
        {this.state.invoices && <InvoiceTable invoices={this.state.invoices}/>}
        {this.state.transactions && <TransactionsTable transactions={this.state.transactions}/>}


      </>
    );
  }
}

export default App;
