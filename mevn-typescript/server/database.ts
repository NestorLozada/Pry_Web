import {connect}from 'mongoose'
const uri = process.env.MONGO_CONNECTION || 'mongodb://localhost/LozadaDatabase'
export const startConnection =async () => {
    try {
        const db = await connect (uri);
        console.log(db.connection.name);

    } catch (error) {
        console.error(error);   
    }

}
