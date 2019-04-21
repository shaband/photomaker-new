const express= require('express');
const router= express.Router();

router.get('users',new UserController.index)


module.exports=router;