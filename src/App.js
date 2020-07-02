import React, { Component } from "react";
import Nav from '../src/components/Nav'
import Table from '../src/components/Table'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      merchants: [],
      items: [],
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
  }

  render() {
    return (
      <>
        <Nav />
        {this.state.customers && <Table customers={this.state.customers}/>}
      </>
    );
  }
}

export default App;
