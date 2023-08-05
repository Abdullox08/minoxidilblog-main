const product = require('../models/posterModels')
const delivery = async(req,res)=>{
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
        res.render('shoping/delivery',{
            title:'delivery page',
            url:process.env.URL,
            multiLang:req.session.lang,
            productAll
        })    
    } catch (err) {
        console.log(err);
    }
}
module.exports ={
    delivery
}