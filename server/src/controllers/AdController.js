const {Ad} = require('../models')
const Op = require('sequelize').Op;

module.exports = {
    async post (req, res) {
        try{
            const ad = await Ad.create(req.body)
            res.send(ad)
        }
        catch(err){
            res.status(500).send({
                error: 'An error has occured while creating ad'
            })
        }
    },
    async editAd (req, res) {
        try{
            console.log('heloooo')
            console.log(req.body.model)
            const ad = await Ad.update({
                manufacturer: req.body.manufacturer,
                model: req.body.model,
                price: req.body.price,
                productionYear: req.body.productionYear,
                color: req.body.color,
                kW: req.body.kW,
                cm3: req.body.cm3,
                kilometers: req.body.kilometers,
                image: req.body.image,
                contactNumber: req.body.contactNumber
            },
            {
                where: {
                    id: req.body.id
                }
            })
            res.send(ad)
        }
        catch(err){
            res.status(500).send({
                error: 'An error has occured while updating ad'
            })
        }
    },
    async deleteAd (req, res) {
        try{
            //console.log(req)
            console.log(req.body)

            console.log('debug')
            /*console.log(req)
            console.log(req.body)
            console.log(req.params)*/
            const id = req.body.delId
            console.log(id)
            if(id){
                await Ad.destroy({
                    where:{
                        id: id
                    }
                })
            }
            res.send({ id: id})
        }catch{
            res.status(500).send({
                error: 'Error while deleting ad.'
            })
        }
    },
    async index (req, res) {
        try{
            let ads = null
            if(req.query.search)
            {
                const json = JSON.parse(req.query.search)
                console.log(json.order)
                if(json.flagUser) {
                    console.log('whyHere')
                    ads = await Ad.findAll({
                        where: {
                            adOwner: json.adOwner
                        }
                    })
                }
                else {
                    let resAds = []
                    if(json.order!==null && (json.order==="desc" || json.order==="descending")) 
                    {
                        console.log('ifff')
                        ads = await Ad.findAll({
                            order: [['productionYear','DESC']] 
                        })
                    }
                    else
                    {
                        console.log('elseee')
                        ads = await Ad.findAll({
                            order: [['productionYear','ASC']] 
                        })
                    }
                    //console.log(ads)
                    console.log('debug')
                    ads.forEach(ad => {
                        let flag = true
                        if(json.manufacturer!==null && json.manufacturer.trim()!=='') {
                            if(ad.dataValues.manufacturer!==json.manufacturer) {
                                flag = false;
                            }
                        }
                        if(json.model!==null && json.model.trim()!=='') {
                            if(ad.dataValues.model!==json.model) {
                                flag = false;
                            }
                        }
                        if(json.lowestPrice!==null && json.lowestPrice.trim()!=='') {
                            if(ad.dataValues.price<json.lowestPrice) {
                                flag = false;
                            }
                        }
                        if(json.highestPrice!==null && json.highestPrice.trim()!=='') {
                            if(ad.dataValues.price>json.highestPrice) {
                                flag = false;
                            }
                        }
                        if(json.productionYearFrom!==null && json.productionYearFrom.trim()!=='') {
                            if(ad.dataValues.productionYear<json.productionYearFrom) {
                                flag = false;
                            }
                        }
                        if(json.productionYearTo!==null && json.productionYearTo.trim()!=='') {
                            if(ad.dataValues.productionYear>json.productionYearTo) {
                                flag = false;
                            }
                        }
                        if(json.color!==null && json.color.trim()!=='') {
                            if(ad.dataValues.color!==json.color) {
                                flag = false;
                            }
                        }
                        if(json.kilometersFrom!==null && json.kilometersFrom.trim()!=='') {
                            if(ad.dataValues.kilometers<json.kilometersFrom) {
                                flag = false;
                            }
                        }
                        if(json.kilometersTo!==null && json.kilometersTo.trim()!=='') {
                            if(ad.dataValues.kilometers>json.kilometersTo) {
                                flag = false;
                            }
                        }
                        if(json.kWFrom!==null && json.kWFrom.trim()!=='') {
                            if(ad.dataValues.kW<json.kWFrom) {
                                flag = false;
                            }
                        }
                        if(json.kWTo!==null && json.kWTo.trim()!=='') {
                            if(ad.dataValues.kW>json.kWTo) {
                                flag = false;
                            }
                        }
                        if(json.cm3From!==null && json.cm3From.trim()!=='') {
                            if(ad.dataValues.cm3<json.cm3From) {
                                flag = false;
                            }
                        }
                        if(json.cm3To!==null && json.cm3To.trim()!=='') {
                            if(ad.dataValues.cm3>json.cm3To) {
                                flag = false;
                            }
                        }
                        if(flag) {
                            resAds.push(ad)
                        }
                    });
                    ads=resAds
                }
            }
            else {
                console.log('elseee2')
                ads = await Ad.findAll()
            }
            res.send(ads)
        }
        catch(err){
            console.log(err)
            res.status(500).send({
                error: 'An error has occured while trying to get ads'
            })
        }
    }
}