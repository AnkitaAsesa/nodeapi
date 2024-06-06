const Company = require('../model/company')

exports.getCompany = async (req,res)=> {
    try {
        const data = await Company.find()
        return res.send({errors:false,data:data})
    } catch (error) {
       return res.status(400).send({errors:true,message:error.message}) 
    }
}

exports.postCompany = async (req,res)=>{
    try {
        const newCompany = new Company(req.body)
        const data = await newCompany.save()
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.putCompany= async (req,res)=>{
    try {
        const id = req.params.id 
        const data = await Company.findByIdAndUpdate(id,req.body,{new:true})
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.deleteCompany = async (req,res)=>{
    try {
        const id = req.params.id 
        const data = await Company.findByIdAndDelete(id)
        return res.send({errors:false,data:data})
    } catch (error) {
     return res.status(400).send({errors:true,message:error.message})   
    }
}