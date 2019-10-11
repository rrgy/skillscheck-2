import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            img: '',
            id: null
        }
    }
    handleUrl(e) {
        this.setState({ img: e.target.value })
    }
    handleName(e) {
        this.setState({ name: e.target.value })
    }
    handlePrice(e) {
        this.setState({ price: e.target.value })
    }
    reset() {
        this.setState({ name: '', price: 0, img: '' })
    }
    addProduct() {
        const newProduct = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
        }
        axios.post('/api/products', newProduct).then(this.props.getInventory())
    }
    componentDidUpdate() {

    }

    render() {
        console.log(this.props)
        return (
            <div>Form
                <input
                    placeholder='image url'
                    onChange={e => this.handleUrl(e)}></input>
                <input
                    placeholder='product name'
                    onChange={e => this.handleName(e)}></input>
                <input
                    placeholder='price'
                    onChange={e => this.handlePrice(e)}></input>
                <button onClick={() => this.reset()}>Cancel</button>
                {this.state.edit ? (
                    <button>Save Changes</button>
                ) : (
                        <button onClick={() => this.addProduct()}>Add to Inventory</button>)}
            </div>
        )
    }
}