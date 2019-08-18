'use strict';

const categoriesModel = require('./categories-schema');

class Categories {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }

    if (_id) { // Vinicio - if the id is defined
      return categoriesModel.find({ _id });
    }
    return categoriesModel.find({});

  }

  create(record) {
    const newRecord = new categoriesModel(record);
    // Vinicio - this returns a promise that resolves into a new player
    return newRecord.save();
  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
    return categoriesModel.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    return categoriesModel.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
