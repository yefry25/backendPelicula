import {Router} from "express";
import {actorespost,actoresget,actoresGetId} from "../controllers/actores.js"
import { validarCampos } from "../middlewares/middleware.js";
import { check } from "express-validator"
const router= new Router()
import {validarJWT} from "../middlewares/validar.js"

router.post('/',[
    validarJWT,
    check('nombre','el campo nombre no puede estar vacio').not().isEmpty(),
    check('biografia','el campo biografia debe ser mayor a 6').isLength({min:6}),
    validarCampos
]
,actorespost)

router.get('/get',actoresget)

router.get('/ID',actoresGetId)

export default router