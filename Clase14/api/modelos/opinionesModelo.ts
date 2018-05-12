import { mongo } from "mongoose";

const mongoose = require("mongoose")


const esquema = new mongoose.Schema({

	comentario :{
		type:String,
		required:true
	},

	cine:{
		type:mongoose.Schema.ObjectId,
		ref:"Cines"
	}


})

const Opiniones = mongoose.model("Opiniones",esquema)

export{Opiniones}