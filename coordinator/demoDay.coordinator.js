const model = require('../model/demoDay.model');
const { v4: uuidv4 } = require("uuid");

class demoCoordinator {
    static addNewChild = async (child) => {
        child.id = uuidv4();

        console.log('coordinator :: addNewChild');
        return model.addNewChild(child);

    };

    static removeChild = async (id) => {
        console.log('coordinator :: removeChild');
        return model.removeChild(id)
    };

    static getChild = async (id) => {
        console.log('coordinator :: getChild');
        return model.getChild(id)
    };

    static editChild = async (id, updatedItem) => {
        updatedItem.id = id;
        console.log('coordinator :: editChild');
        return model.editChild(id, updatedItem)
    };

    static getAllChildren = async () => {
        console.log('coordinator :: getChildren');
        return model.getAllChildren();
    }
}

module.exports = demoCoordinator