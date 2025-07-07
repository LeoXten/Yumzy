import mongoose from 'mongoose';

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://debanjanghosh138:9330384199@cluster0.jxjmg4b.mongodb.net/food-del').then(()=> console.log("DB connected"));
}



