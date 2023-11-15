import AbstractSale from "./AbstractSale";
import Product from "./Product";

class DiscountedSale extends AbstractSale {
    private discountThreshold: number;
    private discountPercentage: number;

    constructor(
        product: Product,
        quantity: number,
        discountThreshold: number,
        discountPercentage: number,
    ) {
        super(product, quantity);
        this.discountThreshold = discountThreshold;
        this.discountPercentage = discountPercentage;
    }

    getPrice(): number {
        if (this.quantity >= this.discountThreshold) {
            return (
                this.product.getPrice() *
                this.quantity *
                (1 - this.discountPercentage / 100)
            );
        } else {
            return this.product.getPrice() * this.quantity;
        }
    }
}

export default DiscountedSale;
