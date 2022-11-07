class Receipt {
    IMPORTED_TAX = 0.05;
    SALES_TAX = 0.10;
    BOTH_TAXES = 0.15;
    TAX_EXEMPT = ['book', 'chocolate', 'chocolates', 'pills'];
    taxes = 0;

    constructor() {
        this.taxes = 0;
    }

    resetTaxes() {
        this.taxes = 0;
    }

    generate(items) {
        let output = '';
        let total = 0;
        if (items === null || items.length === 0) {
            return total;
        }
        items.forEach((item) => {
            const tax = this.calculateTaxes(item);
            const {name, price, quantity} = item;
            const totalItem = quantity * (price + tax);
            total += totalItem;
            output += `${quantity} ${name}: ${totalItem.toFixed(2)} \n`;
        });
        output += `Sales Taxes: ${this.taxes.toFixed(2)} \n`;
        output += `Total: ${total.toFixed(2)}`;
        return output;
    }

    roundUp(price, tax) {
        return Math.ceil((price * tax) * 20) / 20;
    }

    calculateTaxes(input) {
        let tax = 0;
        const {name, price, quantity} = input;
        const isImported = name.includes('imported');
        const isTaxExempt = this.TAX_EXEMPT.some((exempt) => name.includes(exempt));
        if (isImported && !isTaxExempt) {
            tax = this.roundUp(price, this.BOTH_TAXES);
        }
        if (!isImported && !isTaxExempt) {
            tax = this.roundUp(price, this.SALES_TAX);
        }
        if (isImported && isTaxExempt) {
            tax = this.roundUp(price, this.IMPORTED_TAX);
        }
        this.taxes += tax * quantity;
        return tax;
    }
}

export default Receipt;
