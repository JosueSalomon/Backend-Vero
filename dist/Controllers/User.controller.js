"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePrueba = exports.updatePrueba = exports.readPruebaById = exports.readPruebas = exports.createPrueba = exports.FuncionPrueba = void 0;
const User_model_1 = require("../Models/User.model");
const FuncionPrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Ola soy Josue ');
});
exports.FuncionPrueba = FuncionPrueba;
const createPrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.body;
    try {
        const resultado = yield User_model_1.User.create_prueba(nombre);
        res.status(201).json({
            resultado
        });
    }
    catch (error) {
        console.log('error ', error);
        res.status(500).json({ message: ':(', error });
    }
});
exports.createPrueba = createPrueba;
const readPruebas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultado = yield User_model_1.User.read_pruebas();
        res.status(201).json({
            resultado
        });
    }
    catch (error) {
        console.log('error ', error);
        res.status(500).json({ message: ':(', error });
    }
});
exports.readPruebas = readPruebas;
const readPruebaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const resultado = yield User_model_1.User.read_prueba_by_id(Number(id));
        res.status(201).json({
            resultado
        });
    }
    catch (error) {
        console.log('error ', error);
        res.status(500).json({ message: ':(', error });
    }
});
exports.readPruebaById = readPruebaById;
const updatePrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
        const resultado = yield User_model_1.User.update_prueba(Number(id), nombre);
        res.status(201).json({
            resultado
        });
    }
    catch (error) {
        console.log('error ', error);
        res.status(500).json({ message: ':(', error });
    }
});
exports.updatePrueba = updatePrueba;
const deletePrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const resultado = yield User_model_1.User.delete_prueba(Number(id));
        res.status(201).json({
            resultado,
            message: "Se borro el id: " + id,
        });
    }
    catch (error) {
        console.log('error ', error);
        res.status(500).json({ message: ':(', error });
    }
});
exports.deletePrueba = deletePrueba;
