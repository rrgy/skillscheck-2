import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      product: {}
    }
  }

  componentDidMount = () => {
    axios.get('/api/inventory').then(res =>
      this.setState({ inventory: res.data })
    )
      .catch(err => console.log(err))
  }


  render() {

    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} getInventory={this.componentDidMount} />
        <Form getInventory={this.componentDidMount} product={this.state.product} />
      </div>
    );
  }
}

export default App;
