import{Request, Response, NextFunction} from "express"
import{Opiniones} from "../modelos/opinionesModelo"


const controlador ={

	listar: async(req:Request, res:Response)=>{

		const cine = req.params.id
		const opiniones = await Opiniones.find({cine}).populate("cine")
		res.json(opiniones)

	},
	insertar: async(req:Request, res:Response)=>{

		const opinion = new Opiniones(req.body)

		await opinion.save()

		res.json({message:"Registro insertado"})
		
	},
	actualizar: async(req:Request, res:Response)=>{

		const _id = req.params.id
		await Opiniones.findOneAndUpdate({_id},req.body)

		res.json({message:"Registro actualizado"})
		
	},
	eliminar: async(req:Request, res:Response)=>{
		const _id = req.params.id
		await Opiniones.findOneAndRemove({_id})

		res.json({message:"Registro eliminado"})
		
	}

}

export{controlador}
