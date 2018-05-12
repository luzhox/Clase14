import express = require("express")

import{controlador as cineCtrl} from"../api/controladores/cinesControlador"
import{errores as errores} from"../manejadores/errores"
const ruteador = express.Router()

ruteador.get("/detallar/:id", errores.cacheo(cineCtrl.detallar))
ruteador.get("/", errores.cacheo(cineCtrl.listar))
ruteador.post("/", errores.cacheo(cineCtrl.insertar))
ruteador.put("/:id", errores.cacheo(cineCtrl.actualizar))
ruteador.delete("/:id", errores.cacheo(cineCtrl.eliminar))


export{ruteador}