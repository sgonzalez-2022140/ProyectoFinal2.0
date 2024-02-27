'use strict'

import { Router } from 'express'
import {
    purchaseAdd
} from './purchase.controller.js'
import { validateJwt } from '../middlewares/validate-jwt.js'

const api = Router()

//Rutas privadas para cliente
api.post('/purchaseAdd', [validateJwt], purchaseAdd)

export default api