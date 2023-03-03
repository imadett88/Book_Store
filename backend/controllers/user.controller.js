const userService=require("../services/user.service")


const addUser=async(req,res)=>{
    try{
        await userService.createUser(req.body)
        res.status(201).json("user added")
    } catch (error){
        res.status(500).json(error)
    }
}
const getUsers=async(req,res)=>{
    try{
        const users= await userService.getAllUsers()
        res.status(200).json(users)
    } catch (error){
        res.status(500).json(error)
    }
}
module.exports={addUser,getUsers}