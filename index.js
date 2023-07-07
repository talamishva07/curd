const mongooes = require('mongoose');

const { json } = require('express');
const express = require('express');

const DB = "mongodb+srv://demo:crud123456789@cluster0.a44au7j.mongodb.net/demo-crud?retryWrites=true&w=majority";
// const DB = "mongodb://localhost:27017/blog-data";
mongooes.set('strictQuery', false);

mongooes.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connect.......');
}).catch((error) => { console.log('Connection faild'); })

const app = express();

app.use(json());

app.listen(9999, () => {
    console.log('I am Server');
});
const data = [];
app.get('/', (req, res) => {
    res.send("API Done with Class");
})

app.get('/api', (req, res) => {
    res.send(data);
})

app.post('/api/users', (req, res) => {
    const { name, email, address } = req.body;
    res.send(req.body.name);
});