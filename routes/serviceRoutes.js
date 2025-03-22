const express = require('express');
const mongoose = require('mongoose');
const Service = require('../models/service');
const auth = require('../routes/auth');

const router = express.Router();

router.post('/service', auth, async (req, res) => {
    const { name, categoryId } = req.body;
    try {
        const service = new Service({ name, categoryId });
        await service.save();
        res.json(service);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/services', auth, async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.put('/service/:serviceId', auth, async (req, res) => {
    const { name } = req.body;
    try {
        const service = await Service.findByIdAndUpdate(req.params.serviceId, { name }, { new: true });
        res.json(service);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.delete('/service/:serviceId', auth, async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.serviceId);
        res.json({ message: 'Service deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;