const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true)
        }
        else {
            callback(new Error("Origin not allowed by CORS"))
        }
    }
}

app.options("*", cors(corsOptions))

const allowedOrigins = [
    "capacitor://localhost",
    "http://localhost",
    "http://localhost:4200",
    "http://localhost:8000",
    "http://localhost:8080",
    "http://localhost:8100",
    "http://localhost:8101"
]

let connectionString = 'mongodb+srv://marc:granemore115@cluster0.dakoo.mongodb.net/angular-node-test?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to Database")
        const db = client.db('angular-node-test')
        const messagesCollection = db.collection('messages')
        app.use(cors())
        app.use(bodyParser.json())
        app.listen(8080, () => {
            console.log("server started!")
        })

        app.get('/', cors(corsOptions), (req, res) => {
            const cursor = db.collection('messages').find().toArray()
                .then(results => {
                    console.log(results)
                })
                .catch(error => console.error(error))
        })

        app.get('/api/messages', cors(corsOptions), (req, res) => {
            const cursor = db.collection('messages').find().toArray()
                .then(results => {
                    res.send(results)
                    console.log(results)
                })
                .catch(error => console.error(error))
        })
        
        app.get('/api/messages/:name', cors(corsOptions), (req, res) => {
            const cursor = db.collection('messages').find().toArray()
                .then(results => {
                    results.forEach((currentValue, index, arr) => {
                        if (req.params['name'].toLowerCase() == currentValue.name.toLowerCase()) {
                            console.log(`Welcome ${req.params['name']}`)
                            res.send(currentValue)
                        }
                    })
                })
        })

        app.post('/api/add-message', cors(corsOptions), (req, res) => {
            console.log(req.body)
            const name = req.body.messageData.name
            const day = new Date().getDay()
            const month = new Date().getMonth()
            const year = new Date().getFullYear()
            const date = day + '/' + month + '/' + year
            const message = req.body.messageData.message
            messagesCollection.insertOne({
                name: name,
                message: message,
                date: date
            })
                .then(result => {
                    console.log(result)
                })
                .catch(error => console.error(error))
        })

        app.put('/api/update-message', cors(corsOptions), (req, res) => {
            console.log(req.body.updateMessageData)
            // let index = parseInt(req.body.updateMessageData.index, 10)
            // for (let message of messages) {
            //     if (message.id == index) {
            //     message.oldName = message.name
            //     message.newName = req.body.updateMessageData.name
            //     message.message = req.body.updateMessageData.message
            //     delete message.name
            //     }
            // }

            // const cursor = db.collection('messages').find().toArray()
            //     .then(results => {
            //         results.forEach((currentValue, index, arr) => {

            //         })
            //     })
        })
    })