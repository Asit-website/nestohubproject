const Brokers = require('../models/brokerModel');

const brokerCtrl = {
    getBroker:async (req,res)=>{
        try {
            const broker = Brokers.find();
            res.json(broker);
        }

        catch (error) {
            return res.status(500).json({ msg: error.message })
        }
        
    },

    createBroker:async (req,res) =>{
        try {
            const { firstName,lastName, mobile, email, mobileOtp, mobileOtp2, mobileOtp3, mobileOtp4, emailOtp, emailOtp2, emailOtp3, emailOtp4, experience, builderList,registrationNumber, certificationCopy, address, state, pinCode, city, area,whatsapp,file,file1,file2,file3} = req.body;

            const emailUser = await Brokers.findOne({email:email});
            if (emailUser) return res.status(400).json({ msg: "This category is already exist" });
    
            const newBroker = new Brokers({
                firstName,lastName, mobile, email, mobileOtp, mobileOtp2, mobileOtp3, mobileOtp4, emailOtp, emailOtp2, emailOtp3, emailOtp4, experience, builderList,registrationNumber, certificationCopy, address, state, pinCode, city, area,whatsapp,file,file1,file2,file3
            })
    
            await newBroker.save();
    
            res.json({ msg: "created a new Broker Successfully" });
        } 
        
        catch (error) {
             console.log(error);
        }
       
    }
}

module.exports = brokerCtrl;