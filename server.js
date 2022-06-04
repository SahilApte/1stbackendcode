const app = require('mongoose');

require('dotenv').config({ path: '.env' });

mongoose.connect(process.env.DATABASE,
    {

        useUnifiedTopology: true, 
        useNewUrlParser: true
    }
);

mongoose.Promise = global.Promise; // Tell Mongoose to use Es6 promises 
mongoose.connection.on('error', (err) => {
    console.error(`Database Connection Error + ${err.message}`);
});
// require app.js 
const app = require('./app');
// start the server on port 3000 
const server = app.listen(3000, () => {
    console.log(`Express running -> PORT ${server.address().port}`);
})