import Quote from '../models/quote';
import logger from '../core/logger/app-logger';

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const cars = await Quote.getAll();
        logger.info('sending all quotes...');
        res.send(cars);
    } catch (err) {
        logger.error('Error in getting quotes- ' + err);
        res.send('Got error in getAll');
    }
};

export default controller;
