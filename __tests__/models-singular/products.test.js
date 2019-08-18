'use strict';

const Products = require('../../models-singular/products.js');

const supergoose = require('../supergoose.js');

describe('Products Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?
  beforeEach(() => {
  })

  it('can create() a new product', () => {
    let products = new Products();
    const testProduct = {
      name: 'Benjamin Clark',
      price: 99,
    };

    return products.create(testProduct)
      .then(savedProduct => {
        Object.keys(testProduct).forEach(key => {
          expect(savedProduct[key]).toEqual(testProduct[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() a product', () => {
    let products = new Products();
    const testProduct = {
      name: 'Juniper Testy',
      price: 99,
    };

    return products.create(testProduct)
      .then(resolvedProduc => {
        Object.keys(testProduct).forEach(key => {
          expect(resolvedProduct[key]).toEqual(testProduct[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() all products', () => {
    let products = new Products();

    return products.get()
      .then(results => {
        expect(results.length).toEqual(2);
      })
      .catch(error => console.log(error));
  });

  it('can update() a product', () => {
    let products = new Products();
    const testProduct1 = {
      name: 'Benjamin Clark',
      price: 99,
    };
    const testProduct2 = {
      name: 'John Doe',
      price: 99,
    };

    return products.create(testProduct1)
      .then(savedProduct => {
        return products.update(savedProduct._id, testProduct2);
      })
      .then(resolvedProduct => {
        Object.keys(testProduct2).forEach(key => {
          expect(resolvedProduct[key]).toEqual(testProduct2[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can delete() a product', () => {
    let products = new Products();
    const testProduct = {
      name: 'Super Dupe',
      price: 99,
    };

    return products.create(testProduct)
      .then(savedProducts => {
        return products.delete(savedProducts._id)
      })
      .then(result => {
        return products.get();
      })
      .then(resolvedProducts => {
        const existsArr = resolvedProducts.filter((e) => e.name === 'Super Dupe')
        expect(existsArr.length).toEqual(0);
      })
      .catch(error => console.log(error));

  });

});