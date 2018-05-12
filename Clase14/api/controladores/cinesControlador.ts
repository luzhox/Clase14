import{Request, Response, NextFunction} from "express"

import{Cines} from "../modelos/cinesModelo"

const controlador={
	insertar: async(req:Request, res:Response)=>{
		console.log("No se ha implementado")
		const cine = new Cines (req.body)

		await cine.save()
	},

	listar: async(req:Request, res:Response)=>{

		const cines = await Cines.find()
		res.json(cines)
	},

	actualizar: async(req:Request, res:Response)=>{
		
		const _id = req.params.id
		await Cines.findOneAndUpdate({_id},req.body)

		res.json({message: "actualización correcta"})


		// const cine= await Cines.findeOne({_id})
		// await Cines.update({_id: cine._id}, req.body)
	},
	eliminar: async(req:Request, res:Response)=>{
		const _id = req.params.id
		await Cines.findOneAndRemove({_id})

		res.json({message: "actualización correcta"})
		console.log("Registro Eliminado")
	},
	detallar: async(req:Request, res:Response)=>{

		const _id = req.params.id

		const cine = await Cines.findeOne({_id})

		res.json(cine)

	}
}

export{controlador}