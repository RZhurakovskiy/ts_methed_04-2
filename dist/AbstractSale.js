"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractSale {
    product;
    quantity;
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    getProduct() {
        return this.product;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    compare(other) {
        return other.getPrice() - this.getPrice();
    }
}
exports.default = AbstractSale;
