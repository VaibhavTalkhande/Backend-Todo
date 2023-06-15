import mongoose from 'mongoose';



const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
 });
 // mongoose.model is a function that takes two arguments: the name of the model and the schema for the model.
 //model name is User and the schema is schema
 
 export const User = mongoose.model('User', schema);
 