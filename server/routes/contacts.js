const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// GET /api/contacts - get all contacts
router.get('/', contactController.getContacts);

// POST /api/contacts - create a new contact
router.post('/', contactController.createContact);

// PUT /api/contacts/:id - update a contact
router.put('/:id', contactController.updateContact);

// DELETE /api/contacts/:id - delete a contact
router.delete('/:id', contactController.deleteContact);

module.exports = router;