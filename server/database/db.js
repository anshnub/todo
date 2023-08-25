import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD =process.env.DB_PASSWORD;



const Connection = () => {

    const MONGODB_URI =`mongodb://${USERNAME}:${PASSWORD}@ac-dveyooi-shard-00-00.ke6a2ks.mongodb.net:27017,ac-dveyooi-shard-00-01.ke6a2ks.mongodb.net:27017,ac-dveyooi-shard-00-02.ke6a2ks.mongodb.net:27017/?ssl=true&replicaSet=atlas-toek8n-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI ,{useNewUrlParser:true} );

    mongoose.connection.on('connected', ()=>{
        console.log('Database Connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('databse discnncted');
    })

    mongoose.connection.on('error', ()=>{
        console.log('Error while cncnting Databse', error.message);
    })
}


export default Connection;