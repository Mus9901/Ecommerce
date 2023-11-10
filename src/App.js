import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Grey Chair",
          img: "chair-grey.webp",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "chairs",
          price: "29.99",
        },
        {
          id: 2,
          title: "Table",
          img: "table.webp",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "tables",
          price: "49.99",
        },
        {
          id: 3,
          title: "Sofa",
          img: "sofa.jpg",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "sofa",
          price: "549.99",
        },
        {
          id: 4,
          title: "Lamp",
          img: "lamp.webp",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "light",
          price: "25.00",
        },
        {
          id: 5,
          title: "White Chair",
          img: "chair-white.webp",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "chairs",
          price: "29.99",
        },
        {
          id: 6,
          title: "Dark Sofa",
          img: "black_sofa.webp",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "sofa",
          price: "429.99",
        },
        {
          id: 7,
          title: "Blue Chair",
          img: "blue_chair.jpg",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "chairs",
          price: "29.99",
        },
        {
          id: 8,
          title: "Cream Chair",
          img: "cream_chair.jpg",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "chairs",
          price: "29.99",
        },
        {
          id: 9,
          title: "Grey Coffee Table",
          img: "grey_coffee_table.jpg",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "tables",
          price: "149.99",
        },
        {
          id: 10,
          title: "Grey Coffee Table",
          img: "white_coffee_table.jpg",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "tables",
          price: "149.99",
        },
        {
          id: 11,
          title: "Grey Corner Sofa",
          img: "grey_corner_sofa.webp",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "sofa",
          price: "449.99",
        },
        {
          id: 12,
          title: "L Shape Sofa",
          img: "l_shape_sofa.webp",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "sofa",
          price: "449.99",
        },
        {
          id: 13,
          title: "Sky Blue Sofa",
          img: "living_room_sofa.webp",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "sofa",
          price: "449.99",
        },
        {
          id: 14,
          title: "White Sofa",
          img: "white_sofa.jpg",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "sofa",
          price: "249.99",
        },
        {
          id: 15,
          title: "White Table",
          img: "white_table.avif",
          desc: "Lorem Ipsum dolor sit amet, consectetur adisicing.",
          category: "tables",
          price: "39.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  //Creating New method, in this we are changing
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });

    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
