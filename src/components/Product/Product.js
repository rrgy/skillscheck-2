import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        // console.log(this.props.inventory)
        return (
            <div>Product
                <div>{this.props.el.img}</div>
                <p>{this.props.el.name}</p>
                <p>{this.props.el.price}</p>
                <button onClick={this.props.delete(this.props.index)}>Delete</button>
            </div>
        )
    }
}