const coordinator = require('../coordinator/demoDay.coordinator')

const getChild = async (req, res, next) => {
    console.log('controller :: getChild');
    try {
        const child = await coordinator.getChild(req.params.id);
        if (child) {
            res.status(200).send(child);
        } else {
            res.sendStatus(404);
        };
    } catch (ex) {
        return next(ex);
    }
};

const addNewChild = async (req, res, next) => {
    console.log('controller :: addNewChild');
    //const input = req.body;

    //if (!input.name || !input.age) {
       // res.status(400).send({error: 'Child name and age are required!'});

        //return;
    //};

    try {
        const newChild = await coordinator.addNewChild(req.body);
        res.status(201).send(newChild);
    } catch (ex) {
        return next(ex);
    }
};

const removeChild = async (req, res, next) => {
    console.log('controller :: removeChild');
    try {
        const removed = await coordinator.removeChild(req.params.id);
        if (removed) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        };
    } catch(ex) {
        return next(ex);
    }
};

const getAllChildren = async (req, res, next) => {
    console.log('controller :: getAllChildren');
    try {
        const children = await coordinator.getAllChildren();
        res.status(200).send(children)
    } catch(ex) {
        return next(ex);
    }
};

const editChild = async (req, res, next) => {
    console.log('controller :: editChild');
    try {
        const updatedChild = await coordinator.editChild(req.params.id, req.body);
        if (updatedChild) {
            res.status(200).send(updatedChild)
        } else {
            res.sendStatus(404);
        }
    } catch(ex) {
        return next(ex);
    }
};

module.exports = {
    getChild,
    getAllChildren,
    editChild,
    addNewChild,
    removeChild
}