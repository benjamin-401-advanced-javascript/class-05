'use strict';

const Categories = require('../../models-singular/categories.js');

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?
  beforeEach(() => {
  })

  it('can create() a new category', () => {
    let categories = new Categories();
    const testCat = {
      name: 'Benjamin Clark',
      description: 'test test test',
    };

    return categories.create(testCat)
      .then(savedCat => {
        Object.keys(testCat).forEach(key => {
          expect(savedCat[key]).toEqual(testCat[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() a category', () => {
    let categories = new Categories();
    const testCat = {
      name: 'Juniper Testy',
      description: ' ¯\_(ヅ)_/¯ ',
    };

    return categories.create(testCat)
      .then(resolvedCat => {
        Object.keys(testCat).forEach(key => {
          expect(resolvedCat[key]).toEqual(testCat[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() all categories', () => {
    let categories = new Categories();

    return categories.get()
      .then(results => {
        expect(results.length).toEqual(2);
      })
      .catch(error => console.log(error));
  });

  it('can update() a category', () => {
    let categories = new Categories();
    const testCat1 = {
      name: 'Benjamin Clark',
      description: 'test test test',
    };
    const testCat2 = {
      name: 'John Doe',
      description: '',
    };

    return categories.create(testCat1)
      .then(savedCat => {
        return categories.update(savedCat._id, testCat2);
      })
      .then(resolvedCat => {
        Object.keys(testCat2).forEach(key => {
          expect(resolvedCat[key]).toEqual(testCat2[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can delete() a category', () => {
    let categories = new Categories();
    const testCat = {
      name: 'Super Dupe',
      description: 'a clone of the perfect human',
    };

    return categories.create(testCat)
      .then(savedCat => {
        return categories.delete(savedCat._id)
      })
      .then(result => {
        return categories.get();
      })
      .then(resolvedCats => {
        const existsArr = resolvedCats.filter((e) => e.name === 'Super Dupe')
        expect(existsArr.length).toEqual(0);
      })
      .catch(error => console.log(error));

  });

});