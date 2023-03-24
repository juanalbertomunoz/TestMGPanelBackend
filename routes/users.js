const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/users")

/**
 *  List all users
 */
router.get("/", userCtrl.getUsers)

/**
 * create one user
 */
router.post("/", userCtrl.createUser)

/**
 * get detail user
 */
 router.get("/:id", userCtrl.getUser)

/**
 * update one user
 */ 
 router.put("/:id", userCtrl.updateUser) 

 /**
 * delete one user
 */
 router.delete("/:id", userCtrl.deleteUser)

 /**
  * view private
  */
 



module.exports = router