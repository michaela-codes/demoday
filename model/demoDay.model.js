const db = require("../db");

const COLLECTION = "demoday";

class demoModel {
  static getChild = async (id) => {
    //return db.getDb().collection(COLLECTION).find({ id }, { projection: { _id: 0 } }).toArray();
    return db.getDb().collection(COLLECTION).findOne({ id });
  };

  static addNewChild = async (child) => {
    await db.getDb().collection(COLLECTION).insertOne(child);
    return child;
  };

  static removeChild = async (id) => {
    const removed = await db.getDb().collection(COLLECTION).deleteOne({ id });
    if (removed.deletedCount === 0) {
      return false;
    }

    return true;
  };

  static editChild = async (id, updatedItem) => {
    const update = {
      $set: {},
    };

    Object.keys(update).forEach((key) => {
      update.$set[key] = updatedItem[key];
    });

    const updatedChild = Object.assign(update, updatedItem);

    const result = await db
      .getDb()
      .collection(COLLECTION)
      .updateOne({ id }, { $set: { update: updatedItem } });
    if (result.modifiedCount === 0) {
      return false;
    }

    return updatedChild;
  };

  static getAllChildren = async () => {
    return db
      .getDb()
      .collection(COLLECTION)
      .find({}, { projection: { _id: 0 } })
      .toArray();
  };
}

module.exports = demoModel;
