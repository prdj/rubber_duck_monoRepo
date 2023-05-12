const duckCollection = require('../modules/duckSchema');
const ErrorStatus = require('../utils/errorStatus');

const getAllDucks = async (req, res, next) => {
        try {
            const getDucks = await duckCollection.find();
            if (!getAllDucks) throw new ErrorStatus('No ducks found', 404);

            return res.send(getDucks);
        } catch (error) {
           next(error)
        }
};

const getDuckById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const getSingleDuck = await duckCollection.findById(id);
        if (!getSingleDuck) throw new ErrorStatus('Duck not found', 404);

        return res.json(getSingleDuck);
    } catch (error) {
        next(error)
    }

};

const createDuck = async (req, res, next) => {
    try {
        const { name, image, quote, owner } = req.body;
        const newDuck = await duckCollection.create({name, image, quote, owner });

        return res.status(201).json(newDuck);
    } catch (error) {
        next(error);
    }
};

const updateDuck = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, image, quote, owner } = req.body;
        const updatedDuck = await duckCollection.findByIdAndUpdate(
            id,
            { name, image, quote, owner},
            {new: true, runValidator: true}
        );

        return res.json(updateDuck)
    } catch (error) {
        next(error);
    }
};

const deleteDuck = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteDuck = await duckCollection.findByIdAndDelete(id);

        return res.json(deleteDuck);

    } catch (error) {
        next(error);
    }

};

module.exports = {
    getAllDucks, 
    getDuckById, 
    createDuck, 
    updateDuck, 
    deleteDuck,
}