import Receipt from '../src/receipt.js';

describe('Receipt', () => {
  it('should return 0 when products is null', () => {
    const receipt = new Receipt();
    expect(receipt.generate(null)).toBe(0);
  });

  it('should return 0 when products is empty', () => {
    const receipt = new Receipt();
    expect(receipt.generate([])).toBe(0);
  });
  it('should return a receipt with the output1 with items and prices, including taxes', () => {
    const receipt = new Receipt();
    const items = {
      products: [
        {
          id: 1,
          name: 'book',
          price: 12.49,
          quantity: 2,
        },
        {
          id: 2,
          name: 'music CD',
          price: 14.99,
          quantity: 1,
        },
        {
          id: 3,
          name: 'chocolate bar',
          price: 0.85,
          quantity: 1,
        },
      ],
    };
    expect(receipt.generate(items.products)).toBe(
      '2 book: 24.98 \n'
            + '1 music CD: 16.49 \n'
            + '1 chocolate bar: 0.85 \n'
            + 'Sales Taxes: 1.50 \n'
            + 'Total: 42.32',
    );
  });

  it('should return a receipt with the output2 with items and prices, including taxes', () => {
    const receipt = new Receipt();
    const items = {
      products: [
        {
          id: 1,
          name: 'imported box of chocolates',
          price: 10.00,
          quantity: 1,
        },
        {
          id: 2,
          name: 'imported bottle of perfume',
          price: 47.50,
          quantity: 1,
        },
      ],
    };
    expect(receipt.generate(items.products)).toBe(
      '1 imported box of chocolates: 10.50 \n'
            + '1 imported bottle of perfume: 54.65 \n'
            + 'Sales Taxes: 7.65 \n'
            + 'Total: 65.15',
    );
  });

  it('should return a receipt with the output3 with items and prices, including taxes', () => {
    const receipt = new Receipt();
    const items = {
      products: [
        {
          id: 1,
          name: 'imported bottle of perfume',
          price: 27.99,
          quantity: 1,
        },
        {
          id: 2,
          name: 'bottle of perfume',
          price: 18.99,
          quantity: 1,
        },
        {
          id: 3,
          name: 'packet of headache pills',
          price: 9.75,
          quantity: 1,
        },
        {
          id: 4,
          name: 'box of imported chocolates',
          price: 11.25,
          quantity: 3,
        },
      ],
    };
    expect(receipt.generate(items.products)).toBe(
      '1 imported bottle of perfume: 32.19 \n'
            + '1 bottle of perfume: 20.89 \n'
            + '1 packet of headache pills: 9.75 \n'
            + '3 box of imported chocolates: 35.55 \n'
            + 'Sales Taxes: 7.90 \n'
            + 'Total: 98.38',
    );
  });

  it('should return a receipt with the custom output with items and prices, including taxes', () => {
    const receipt = new Receipt();
    const items = {
      products: [
        {
          id: 1,
          name: 'imported bottle of perfume',
          price: 27.99,
          quantity: 1,
        },
        {
          id: 2,
          name: 'music CD',
          price: 14.99,
          quantity: 1,
        },
        {
          id: 3,
          name: 'packet of headache pills',
          price: 9.75,
          quantity: 1,
        },
        {
          id: 4,
          name: 'box of imported chocolates',
          price: 11.25,
          quantity: 3,
        },
      ],
    };
    expect(receipt.generate(items.products)).toBe(
      '1 imported bottle of perfume: 32.19 \n'
            + '1 music CD: 16.49 \n'
            + '1 packet of headache pills: 9.75 \n'
            + '3 box of imported chocolates: 35.55 \n'
            + 'Sales Taxes: 7.50 \n'
            + 'Total: 93.98',
    );
  });
  it('should return taxes 0 calling reset taxes', () => {
    const receipt = new Receipt();
    receipt.taxes = 10;
    receipt.generate([]);
    receipt.resetTaxes();
    const { taxes } = receipt;
    expect(taxes).toBe(0);
  });
});
