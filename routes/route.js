const express = require('express');

const router = new express.Router();

const controller = require('../controller/route.controller')

router.post('/users', controller.createAgentAndClient);

router.get('/users/:id', controller.getAgencyClientsMaxBill );

router.patch('/users/:id', controller.updateClientDetails );

router.get('/', controller.home);

module.exports = router;