import validator from 'validator';
import {MongoClient} from 'mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {}
    const {email, name, message} = req.body;

    if (!validator.isEmail(email) ||
        validator.isEmpty(name, {ignore_whitespace:true}) ||
        validator.isEmpty(message, {ignore_whitespace:true})
    ) {
        res.status(422).json({message: 'Invalid input'});
        return
    }

    const newMessage = {email, name, message};

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.mqcnk.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    let client
    try {
        client = await MongoClient.connect(connectionString, {
            useUnifiedTopology: true
        });
    } catch (e) {
        res.status(500).json({message: 'Could not connect to db'});
        return
    }

    const db = client.db();
    try {
        const result = await db.collection('messages').insertOne(newMessage);
        newMessage.id = result.insertedId;
    } catch (e) {
        client.close();
        res.status(500).json({message: 'Storing message failed'})
    }

    client.close();
    res.status(201).json({message: 'Successfully stored your message!', data: newMessage})
}

export default handler;