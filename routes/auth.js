const mongoose = require('mongoose');
const express = require('express');
const JWT = require('jsonwebtoken');

require('dotenv').config();

const router =  express.Router();
router.post('/login', (req , res) => {
    const {email, password} = req.body;
    if(email === ' admin@codesfortomorrow.com' && password === 'Admin123!@#'){
        const token = JWT.sign({
            email: email
        }, process.env.JWT_SECRET);
        res.json({
            token: token
        })
}});

module.exports = router;