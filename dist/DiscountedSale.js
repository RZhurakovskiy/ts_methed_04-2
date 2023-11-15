"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSale_1 = __importDefault(require("./AbstractSale"));
class DiscountedSale extends AbstractSale_1.default {
    discountAmount;
    constructor(product, quantity, discountAmount) {
        super(product, quantity);
        this.discountAmount = discountAmount;
    }
    getPrice() {
        return (this.product.getPrice() - this.discountAmount) * this.quantity;
    }
}
exports.default = DiscountedSale;
