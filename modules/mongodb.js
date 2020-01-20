const MongoClient = require('mongodb').MongoClient
const envData = require('./../env.json')
const CONNECTION_URL  = `mongodb+srv://${envData.username}:${envData.password}@${envData.server}?retryWrites=true&w=majority`

exports.storeMutant = (mutantStat) => {
    const client = new MongoClient(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    
    client.connect(err => {
        if(err) throw err
        
        const collection = client.db(envData.database).collection(envData.collection)

        collection.insertOne(mutantStat).then(result => {
        	client.close()
        })
    })
}

exports.getMutants = async () => {
    const client = await MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    const collection = client.db(envData.database).collection(envData.collection)
    const docs = await collection.find({}).toArray()

    return docs
}
