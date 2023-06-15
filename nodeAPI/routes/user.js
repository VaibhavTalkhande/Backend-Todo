import express from 'express';

import { getAllusers } from '../controller/user.js';

const router = express.Router();

router.get('/all',getAllusers );

router.post('/new',createUser);

router.get("/userid/special",userSpecial);


router
    .route("/userid",getUserById)
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


export default router;