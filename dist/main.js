"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DiscountedSale_1 = __importDefault(require("./DiscountedSale"));
const QuantityDiscountSale_1 = __importDefault(require("./QuantityDiscountSale"));
const Product_1 = __importDefault(require("./Product"));
const product1 = new Product_1.default("Товар 1", 100);
const product2 = new Product_1.default("Товар 2", 200);
const product3 = new Product_1.default("Товар 3", 300);
const product4 = new Product_1.default("Товар 4", 400);
const sale1 = new DiscountedSale_1.default(product1, 2, 10);
const sale2 = new DiscountedSale_1.default(product2, 3, 10);
const sale3 = new DiscountedSale_1.default(product3, 4, 10);
const sale4 = new DiscountedSale_1.default(product4, 5, 10);
const sale5 = new QuantityDiscountSale_1.default(product1, 5, 3, 10);
const sale6 = new QuantityDiscountSale_1.default(product2, 5, 3, 10);
const sale7 = new QuantityDiscountSale_1.default(product3, 5, 3, 10);
const sale8 = new QuantityDiscountSale_1.default(product4, 5, 3, 10);
const sales = [
    sale1,
    sale2,
    sale3,
    sale4,
    sale5,
    sale6,
    sale7,
    sale8,
];
sales.sort((a, b) => b.compare(a));
sales.forEach((sale) => console.log(sale.getProduct().getName(), sale.getPrice().toFixed(2)));
