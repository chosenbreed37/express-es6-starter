import express from 'express';
import controller from '../controllers/quotes';

const router = new express.Router();

router.get('/', (req, res) => {
    controller.getAll(req, res);
});

export default router;
