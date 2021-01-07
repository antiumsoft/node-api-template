import express from 'express';
import userService from "../services/user/index.js";

const router = express.Router();


// User List - ADMIN
router.get('/', function(req, res, next) {
    userService.listUser();
});

// User Profile
router.get('/:id', function (req, res, next) {
    userService.getUser(req.params.id);
});

// Update user profile & data from IdP
router.put('/:id', function (req, res, next) {
    userService.updateUser(req.params.id, req.body);
})

// Create user profile - uses IdP User ID as ID
router.post('/:id', function (req, res, next) {
    userService.createUser(req.params.id, req.body);
})

// Delete user profile & data from IdP
router.delete('/:id', function (req, res, next) {

})

export default router;