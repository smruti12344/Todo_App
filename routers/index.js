const express = require('express'); //use of express
const router = express.Router(); //use of router
//access controller
const homeController = require('../controllers/homeController');
router.get('/',homeController.home);
router.post('/create',homeController.create);
router.post('/delete_todo',homeController.delete);
router.get('/edit_todo_list',homeController.edit);
router.post('/update_todo',homeController.update);
module.exports = router;