import{Request, Response, NextFunction} from "express"

interface IError extends Error{

	status?:number
}

const errores ={

	rutaNoEncontrada:(req:Request,res:Response,next:NextFunction)=>{
		const error: IError = new Error("Ruta no encontrada")
		error.status=404
		next(error)
	},


	cacheo:(ftn:(req:Request, res:Response)=> Promise<any>)=>{
		return (rq:Request, rs:Response, nx:NextFunction)=>{
			return ftn(rq,rs).catch(error=> {
				nx(error)
				error.status=500
				nx(error)
			})
		   //return ftn(rq,rs).catch(nx)

		}
	}, 

	errorGeneral :(error: IError, req:Request, res:Response, next:NextFunction)=>{

		if(process.env.NODE_ENV ==="development"){
			res	
				.status(error.status)
				.json({
					message: error.message,
					status: error.status,
					stack: error.stack
				})
		} else if(process.env.NODE_ENV ==="production") {

			res	
			.status(error.status)
			.json({
				message: error.message,
				status: error.status
			})

		}
	},


}

export {errores}