const express = require('express');
const Category = require('../models/category');
const Service = require('../models/service');
const auth = require('../routes/auth');

const router = express.Router();

router.post('/category', auth, async (req, res) => {
    const { name } = req.body;
    try {
        const category = new Category({ name });
        await category.save();
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/categories', auth, async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.put('/category/:categoryId', auth, async (req, res) => {
    const { name } = req.body;
    try {
        const category = await Category.findByIdAndUpdate(req.params.categoryId, { name }, { new: true });
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }});

router.delete('/category/:categoryId', auth, async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.categoryId);
        res.json({ message: 'Category deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/category/:categoryId/service', auth, async (req, res) => {
    const { name } = req.body;
    try {
        const service = new Service({ name, categoryId: req.params.categoryId });
        await service.save();
        res.json(service);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }});
router.get('/category/:categoryId/services', auth, async (req, res) => {
    try {
        const services = await Service.find({ categoryId: req.params.categoryId });
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.delete('/category/:categoryId/service/:serviceId', auth, async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.serviceId);
        res.json({ message: 'Service deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.put('/category/:categoryId/service/:serviceId', auth, async (req, res) => {
    const { name } = req.body;
    try {
        const service = await Service.findByIdAndUpdate(req.params.serviceId, { name }, { new: true });
        res.json(service);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }});
module.exports = router;