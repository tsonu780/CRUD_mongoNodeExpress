const momgoose = require('mongoose');

momgoose.connect(process.env.MONGO_URL+process.env.DB_NAME, {
    useNewUrlParser: true
    // useCreateIndex: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('connected');
}).catch((e) => {
    console.log(e);
});

// module.exports