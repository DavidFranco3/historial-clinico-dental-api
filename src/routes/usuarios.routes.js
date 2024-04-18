const express = require("express");
const router = express.Router();
const usuarios = require("../models/usuarios");
const nodeMailer = require("nodemailer");

// Registro de usuarios
router.post("/registro", async (req, res) => {
    const usuarioRegistrar = usuarios(req.body);
    await usuarioRegistrar
        .save()
        .then((data) =>
            res.status(200).json(
                {
                    mensaje: "Registro exitoso del usuario", datos: data
                }
            ))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los usuarios
router.get("/listar", async (req, res) => {
    usuarios
        .find()
        .sort({ _id: -1 })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un usuario en especifico
router.get("/obtener/:id", async (req, res) => {
    const { id } = req.params;
    //console.log("buscando")
    usuarios
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Borrar un usuario
router.delete("/eliminar/:id", async (req, res) => {
    const { id } = req.params;
    usuarios
        .deleteOne({ _id: id })
        .then((data) => res.status(200).json({ mensaje: "Usuario eliminado" }))
        .catch((error) => res.json({ message: error }));
});

// Cambiar estado
router.put("/deshabilitar/:id", async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    usuarios
        .updateOne({ _id: id }, { $set: { estado } })
        .then((data) => res.status(200).json({ mensaje: "Estado del usuario actualizado" }))
        .catch((error) => res.json({ message: error }));
});

// Actualizar datos de la orden de trabajo
router.put("/actualizar/:id", async (req, res) => {
    const { id } = req.params;
    const { nombre, email, password, tipo, departamento } = req.body;

    await usuarios
        .updateOne({ _id: id }, { $set: { nombre, email, password, tipo, departamento } })
        .then((data) => res.status(200).json({ mensaje: "Datos del usuario actualizados" }))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
