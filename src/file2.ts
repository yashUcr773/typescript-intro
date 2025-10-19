interface Products {
    productName: string;
    price: number;
    applyDiscount: (discount: number) => number
}

const product1: Products = {
    productName: 'pname1',
    price: 100,
    applyDiscount(discount) {
        return this.price * (1 - discount)
    },
}

console.log(product1.applyDiscount(20))