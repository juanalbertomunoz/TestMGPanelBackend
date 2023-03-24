const mongoose = require("mongoose")

const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', false);
        const uri = 'mongodb+srv://miguayaba:B21Fod5RncbWdPp0@cluster0.jpjgyhl.mongodb.net/?retryWrites=true&w=majority'
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        console.log('**** DB CONNECTED ****')
    } catch (err) {
        console.log('**** ERROR DB CONNECTION ****', err)
    }
}

module.exports = dbConnect;
