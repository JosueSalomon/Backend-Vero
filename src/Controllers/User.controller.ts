import { Request, Response } from 'express';
import {User} from "../Models/User.model"

export const FuncionPrueba = async (req: Request, res: Response) =>{
    res.send('Ola soy Josue ');
} 

export const createPrueba = async(req: Request, res: Response) =>{
    const { 
        nombre
    } = req.body;
    try {

        const resultado = await User.create_prueba(nombre)

        res.status(201).json({
            resultado
        })


    }catch(error){
        console.log('error ', error);
        res.status(500).json({ message: ':(', error });
    }
}
export const readPruebas = async(req: Request, res: Response) =>{
    try {

        const resultado = await User.read_pruebas()

        res.status(201).json({
            resultado
        })
    }catch(error){
        console.log('error ', error);
        res.status(500).json({ message: ':(', error });
    }
}
export const readPruebaById = async(req: Request, res: Response) =>{
    const { id } = req.params; 
    try {

        const resultado = await User.read_prueba_by_id(Number(id))

        res.status(201).json({
            resultado
        })

    }catch(error){
        console.log('error ', error);
        res.status(500).json({ message: ':(', error });
    }
}
export const updatePrueba = async(req: Request, res: Response) =>{
    const { id } = req.params; 
    const {nombre} = req.body
    try {
        const resultado = await User.update_prueba(Number(id), nombre)

        res.status(201).json({
            resultado
        })
    }catch(error){
        console.log('error ', error);
        res.status(500).json({ message: ':(', error });
    }
}
export const deletePrueba = async(req: Request, res: Response) =>{
    const { id } = req.params; 
    try {
        const resultado = await User.delete_prueba(Number(id))

        res.status(201).json({
            resultado,
            message: "Se borro el id: "+id, 
        })
    }catch(error){
        console.log('error ', error);
        res.status(500).json({ message: ':(', error });
    }
}