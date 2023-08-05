const product = require('../models/posterModels')
const payController =async(req,res)=>{
    try {
        const productAll = await product.find().lean()
        const resLang = req.query.lang
        const languz = require('../lang/languz')
        const langru = require('../lang/langru')
        if(resLang === 'uz'){
            req.session.lang = languz
            req.session.save(err=>{
                if(err) throw err
            })
        }
        if(resLang === 'ru'){
            req.session.lang = langru
            req.session.save(err=>{
                if(err) throw err
            })
        }
        res.render('shoping/pay',{
            title:"pay page",
            url:process.env.URL,
            productAll,
            multiLang:req.session.lang
        })
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    payController
}