const express = require("express");
const router = express.Router();
const controller = require('../controller/demoDay.controller')


router.post('/', controller.addNewChild);
router.get('/', controller.getAllChildren);
router.delete('/:id', controller.removeChild);
router.get('/:id', controller.getChild);
router.patch('/:id', controller.editChild)


module.exports = router