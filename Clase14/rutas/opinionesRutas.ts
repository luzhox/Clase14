import express = require("express")

import{controlador as opinionesCtrl} from"../api/controladores/opinionesControlador"
import{errores as errores} from"../manejadores/errores"
const ruteador = express.Router()

ruteador.get("/:id", errores.cacheo(opinionesCtrl.listar))
ruteador.post("/", errores.cacheo(opinionesCtrl.insertar))
ruteador.put("/:id", errores.cacheo(opinionesCtrl.actualizar))
ruteador.delete("/:id", errores.cacheo(opinionesCtrl.eliminar))


export{ruteador}