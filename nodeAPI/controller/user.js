import User from '../models/user.js';
export const getAllusers=async(req, res) =>{
    const users = await User.find({});

    const keyword = req.query.keyword;
    res.json({
        success: true,
        users: users,
    })
}

export const  createUser= async(req, res) =>{
    const {name, email, password} = req.body;

    await User.create({
        name,
        email,
        password,
    });
}

export const userSpecial =  async(req, res) =>{
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

export const getUserById =  async(req, res) =>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.json({
        success: true,
        user: [],
    })
}

export const updateUser =  async(req, res) =>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.json({
        success: true,
        user: [],
    })
}

export const deleteUser =  async(req, res) =>{
    const {id} = req.params;
    const user = await User.findById(id);
    user.remove();
    res.json({
        success: true,
        user: [],
    })
}