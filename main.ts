import AbstractSale from "./AbstractSale";
import DiscountedSale from "./DiscountedSale";
import QuantityDiscountSelling from "./QuantityDiscountSale";
import Product from "./Product";

const product1 = new Product("Товар 1", 100);
const product2 = new Product("Товар 2", 200);
const product3 = new Product("Товар 3", 300);
const product4 = new Product("Товар 4", 400);

const sale1 = new DiscountedSale(product1, 2, 10);
const sale2 = new DiscountedSale(product2, 3, 10);
const sale3 = new DiscountedSale(product3, 4, 10);
const sale4 = new DiscountedSale(product4, 5, 10);

const sale5 = new QuantityDiscountSelling(product1, 5, 3, 10);
const sale6 = new QuantityDiscountSelling(product2, 5, 3, 10);
const sale7 = new QuantityDiscountSelling(product3, 5, 3, 10);
const sale8 = new QuantityDiscountSelling(product4, 5, 3, 10);

const sales: AbstractSale[] = [
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

sales.forEach((sale) =>
    console.log(sale.getProduct().getName(), sale.getPrice().toFixed(2)),
);
