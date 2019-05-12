import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

// GET request for one user.
router.get('/user/:id', userController.user_detail);

// GET request for all users.
router.get('/users', userController.user_list);

// POST request create user
router.post('/user/create', userController.user_create_post); //controlller.method

// POST request to delete user.
router.post('/user/:id/delete', userController.user_delete_post);

// POST request to update user.
router.get('/user/:id/update', userController.user_update_post);

module.exports = router;