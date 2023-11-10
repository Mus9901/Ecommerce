import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={"../img/items/" + this.props.item.img}
          alt="My Awesome"
          onClick={() => this.props.onShowItem(this.props.item)}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>£{this.props.item.price}</b>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
      </div>
    );
  }
}

export default Item;
