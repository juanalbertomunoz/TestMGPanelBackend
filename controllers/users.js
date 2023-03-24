const { error } = require("console")
const User = require("../models/user")

/**
 * get users
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req, res) => {
    try{
        const usersData = await User.find()
          res.json(usersData)
    }catch(e){
        res.send(error)
    }
    
}

/**
 * Get detail user
 */

const getUser = async (req, res) => {
  try{
    const id = req.params.id
    const data = await User.findOne({
      _id :  id
    })
    res.send({ data })
  }catch(e){
    res.send(error)
}
}



/**
 * create user
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async (req, res) => {
  console.log('probando', req.body)
    try {
        const data = await User.create(req.body)
        res.send({ data});
      } catch (e) {
        console.log(e)
    }
    
}

/**
 * Update user
 * @param {*} req 
 * @param {*} res 
 */
 const updateUser = async (req, res) => {
    try {
      const data = await User.findByIdAndUpdate(req.params.id, req.body)
      res.send({data});
      } catch (e) {
        console.log(e)
        res.send(error)
      }
    
}


const deleteUser = async (req, res) => {
  try{
    const id = req.params.id
    const data = await User.findByIdAndDelete(id)
    res.send({ data })
  }catch(e){
    console.log(e)
    res.send(error)
  }
}


module.exports = {getUser, getUsers, createUser, updateUser, deleteUser}