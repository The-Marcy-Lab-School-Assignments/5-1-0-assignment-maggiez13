import getId from "../utils/getId";

class CartItem {
  #id = getId();
  constructor (name, price) {
    this.id = this.#id;
    this.name = name;
    this.price = price; 
  }
  getId() {
    return this.#id;
  }
}

export default CartItem;