
const agentSchema = require('../models/agentSchema');
const clientSchema = require('../models/clientSchema')

module.exports = {
    createAgentAndClient : async (req, res) => {
        try {
            console.log(req.body);
            let searchKey = 'TotalBill';
            let clientParams = req.body.find(obj => obj[searchKey])
            console.log('client: ',clientParams, req.body.indexOf(clientParams))
            let agentParams = req.body.indexOf(clientParams) == 0 ? req.body[1] : req.body[0]
            console.log('Agent: ',agentParams)
            const agent = new agentSchema(agentParams);
            const client = new clientSchema(clientParams);
            let agentAdded = await agent.save()
            console.log("agentAdded : ", agentAdded);
            let clientAdded = await client.save()
            console.log("clientAdded: ", clientAdded);
            res.status(200).send({ agentAdded, clientAdded });
        }
        catch (e) { 
            console.log(e.message);
            res.send(e.message)
        }
    },
    updateClientDetails: async (req, res) => {
        try {
            console.log(req.body);
            const _id = req.params.id
            let user = await clientSchema.find({_id});
            if (user) {
                user = clientSchema(req.body);
                let updatedUser = await user.save()
                res.status(200).send(updatedUser);
            } else {
                res.status(400).send('No user found');
            }
            // }).catch((err) => {
            //   res.status(400).send(err);
            // });
        }
        catch (e) { 
            console.log(e);
            res.send({error: e.message})
        }
    },
    getAgencyClientsMaxBill: async (req, res) => {
        try {
            console.log('----id',req.body);
            const _id = req.params.id
            agentSchema.findById({_id}).then((data) => {
            console.log("DATA: ", data);
            res.status(200).send(data);
            }).catch((err) => {
            res.status(400).send(err);
            });
        }
        catch (e) { 
            console.log(e);
            res.send('error',e)
        }
    },
    home: async (req, res) => {
        console.log(req.body);
        res.status(200).send('OKK')
    }
}