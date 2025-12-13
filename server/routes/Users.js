const express = require('express')
const router = express.Router()
const {getAllUsers,getUser,createUser,updateUser,deleteUser} = require('../controller/User')

router.get('/', getAllUsers )
router.get('/:id', getUser)

router.post('/', createUser)

router.delete('/:id', deleteUser)

router.put('/:id', updateUser)

module.exports = router