"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSale_1 = __importDefault(require("./AbstractSale"));
class DiscountedSale extends AbstractSale_1.default {
    discountThreshold;
    discountPercentage;
    constructor(product, quantity, discountThreshold, discountPercentage) {
        super(product, quantity);
        this.discountThreshold = discountThreshold;
        this.discountPercentage = discountPercentage;
    }
    getPrice() {
        if (this.quantity >= this.discountThreshold) {
            return (this.product.getPrice() *
                this.quantity *
                (1 - this.discountPercentage / 100));
        }
        else {
            return this.product.getPrice() * this.quantity;
        }
    }
}
exports.default = DiscountedSale;
