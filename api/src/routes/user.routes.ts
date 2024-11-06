import { Router } from 'express';
import {Login}  from '../controllers/user.controller';

const router = Router();

router.post("/", Login);

export default router;
