import express from 'express';
import mongoose from 'mongoose';


mongoose
    .connect("mongodb://127.0.0.1:27017",{
        dbName: 'backendAPI',
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const schema = new mongoose.Schema({
   name: String,
   email: String,
   password: String,
});
// mongoose.model is a function that takes two arguments: the name of the model and the schema for the model.
//model name is User and the schema is schema

const User = mongoose.model('User', schema);

const app = express();
app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Hello World');
}
);

app.get('/users/all', async(req, res) =>{
    const users = await User.find({});
    res.json({
        success: true,
        users: users,
    })
}
);
app.get("/userid/special",(req,res)=>{
    res.json({
        success:ture,
        message:"just joking",
    })
});
app.get('/users/:id', async(req, res) =>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.json({
        success: true,
        user: [],
    })
}

);  

app.post('/users/new', async(req, res) =>{
    const {name, email, password} = req.body;

    await User.create({
        name,
        email,
        password,
    });


    res.status(201).cookie("token","lol").json({
        success: true,
        message: 'User created successfully',

    });
}
);


app.listen(3000, () => 
console.log('Server running on port 3000'));
