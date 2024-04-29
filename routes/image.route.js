import { imageController } from '../controllers/image.controller.js'
import { Router } from 'express'

const router = Router()

router.get("/inicio", imageController.inicio)

router.post("/image", imageController.guardarImagen)

router.get("/mostrar", imageController.mostrarImagen)

export default router;