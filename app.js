const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost/Pizza', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const port = 8000;

// Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
 });
 var Contact = mongoose.model('Order', contactSchema);   //  Pizza is database and Order is the collection but in mongodb it will be written plural i-e orders 


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded({ extended: true })); // It helps to take data from html forms to express

// PUG SPECIFIC STUFF / CONFIGURATION
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// END POINTS
app.get('/', (req, res)=>{
   const params = {};
   res.status(200).render('home.pug',params);
})

app.get('/contact', (req, res)=>{
    const params = {};
    res.status(200).render('contact.pug',params);
 })

app.get('/about', (req, res)=>{
    const params = {};
    res.status(200).render('about.pug',params);
 })

 app.post('/contact', (req, res)=>{

    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was nt saved to the database")
    });
 
    
 })

 // START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on ${port}`);
})