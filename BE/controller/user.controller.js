import User from "../model/user.model.js"
import bcryptjs from "bcryptjs";

export const signup = async(req,res)=>{
try {
    const {fullName,email,password}=req.body;
    const user = await User.findOne({email})
    if(user){
        return res.status(201).json({message:"User already exisits"})
    }
    const hashPassword = await bcryptjs.hash(password,10);
    // if user not ecist then create it here
    const createdUser = new User({
        fullName:fullName,
         email:email, 
          password:hashPassword,
    });
    // save the data now
    await createdUser.save();
    res.status(201).json({message:"User created successfully"});
} catch (error) {
    console.log("Error"+ error.message);
    res.status(500).json({message:"Internal server error"})
}
}

// for login

export const login = async(req,res)=>{
    try {
        const {email,password}=req.body;
        // find already exixt or not
        const user = await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user|| !isMatch)
        {
            return res.status(400).json({
                message:"Invalid Usernamre or password"
            });       
        }
        else{
            res.status(200).json({message:"Login Successful",user:{
                _id:user.id,
                fullName:user.fullName,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error"+ error.message);
        res.status(500).json({message:"Internal server error"})
    }
}