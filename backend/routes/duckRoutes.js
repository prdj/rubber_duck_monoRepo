const express = require('express');
const duckRouter = express.Router();
const {
    getAllDucks,
    getDuckById,
    createDuck,
    updateDuck,
    deleteDuck,
} = require('../controllers/duckControllers');

const {
    checkId,
    checkAddDuck,
    checkUpdateDuck,
} = require('../middlewere/validateReq');

duckRouter.route('/').get(getAllDucks).post(checkAddDuck, createDuck);

duckRouter
    .route('/:id')
    .all(checkId)
    .get(getDuckById)
    .put(checkUpdateDuck, updateDuck)
    .delete(deleteDuck);

module.exports = duckRouter;