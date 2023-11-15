import Product from "./Product";

abstract class AbstractSale {
    protected product: Product;
    protected quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    getProduct(): Product {
        return this.product;
    }

    getQuantity(): number {
        return this.quantity;
    }

    setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    abstract getPrice(): number;

    compare(other: AbstractSale): number {
        return other.getPrice() - this.getPrice();
    }
}

export default AbstractSale;
