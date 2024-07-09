import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  id = getId();
  #cartItems = [];
  static #allCarts = [];

  constructor() {
    ShoppingCart.#allCarts.push(this);
  }

  createItem(name, price) {
    const item = new CartItem(name, price);
    this.#cartItems.push(item);
    return item; 
  }
  getItems(){
    return [...this.#cartItems];
  }
  removeItem(id){
    this.#cartItems.splice(this.#cartItems.findIndex((item) => item.getId() === id), 1);
  }
  getTotal(){
    return this.#cartItems.reduce((total, item) => total + item.price, 0);
    // return this.#cartItems.reduce((total, { price }) => total + price, 0);
    // let total = 0;
    // for (let i = 0; i < this.#cartItems.length; i++) {
    //   total += this.#cartItems[i].price;
    // }
    // return total;
  }
  static listAll() {
    return [...ShoppingCart.#allCarts];
  }
  static findBy(id) {
    return ShoppingCart.#allCarts.find((cart) => cart.id === id);
  }
}

export default ShoppingCart;