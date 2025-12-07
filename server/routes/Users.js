const express = require('express')
const router = express.Router()
const {getAllUsers,getUser,createUser,updateUser,deleteUser} = require('../controller/User')

function adminAuth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; 
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

router.get('/', adminAuth, getAllUsers )
router.get('/:id', getUser)

router.post('/', createUser)

router.delete('/:id', deleteUser)

router.put('/:id', updateUser)

module.exports = router