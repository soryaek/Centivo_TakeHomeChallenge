const express = require('express');
const router = express.Router();
const User = require ('../models/User.js');
const mongoose = require('mongoose');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid Input ID" });
    }

    try {
        const user = await User.findOne({
            _id: new mongoose.Types.ObjectId(id), 
            age: { $gt: 21 }
        });
        if (!user) {
            return res.status(404).json({ message: 'User was not found or is under the age 21.' });
        }
        res.json(user);
    } catch(error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
})

module.exports = router;