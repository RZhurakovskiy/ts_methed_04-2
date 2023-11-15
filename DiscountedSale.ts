import AbstractSale from "./AbstractSale";
import Product from "./Product";

class DiscountedSale extends AbstractSale {
    private discountAmount: number;

    constructor(product: Product, quantity: number, discountAmount: number) {
        super(product, quantity);
        this.discountAmount = discountAmount;
    }

    getPrice(): number {
        return (this.product.getPrice() - this.discountAmount) * this.quantity;
    }
}

export default DiscountedSale;
