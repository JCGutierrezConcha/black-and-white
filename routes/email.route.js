import { emailController } from '../controllers/email.controller.js'
import { Router } from 'express'

const router = Router()

router.get("/email/send", emailController.enviarMail)

export default router;