import { Router} from "express";

import sendMessage from "./controllers/message-controler";


const router=Router();

router.get('/', welcome)
router.get('/message/message', sendMessage)
export {router}