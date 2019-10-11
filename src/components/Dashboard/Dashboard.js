import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
    delete = () => {
        axios.delete('/api/product/:index').then(this.props.getInventory())
    }
    render() {
        // console.log(this.props.inventory)
        return (
            <div>Dashboard
                {this.props.inventory.map((el, index) => {
                return <Product
                    el={el}
                    index={index}
                    inventory={this.props.inventory}
                    delete={this.delete} />
            })}
            </div>
        )
    }
}