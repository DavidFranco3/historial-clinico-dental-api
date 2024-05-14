const express = require("express");
const router = express.Router();
const historiaClinica = require("../models/historiaClinica");

// Registro de lla historia clinica
router.post("/registro", async (req, res) => {

        const historiaClinicaRegistrar = historiaClinica(req.body);
        await historiaClinicaRegistrar
            .save()
            .then((data) =>
                res.status(200).json(
                    {
                        mensaje: "Registro exitoso de la historia clinica", datos: data
                    }
                ))
            .catch((error) => res.json({ message: error }));
});

// Obtener todas las historias clinicas
router.get("/listar", async (req, res) => {
    historiaClinica
        .find()
        .sort({ _id: -1 })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener una historia clinica en especifico
router.get("/obtener/:id", async (req, res) => {
    const { id } = req.params;
    //console.log("buscando")
    historiaClinica
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Borrar una historia clinica
router.delete("/eliminar/:id", async (req, res) => {
    const { id } = req.params;
    historiaClinica
        .deleteOne({ _id: id })
        .then((data) => res.status(200).json({ mensaje: "Historia clinica eliminada" }))
        .catch((error) => res.json({ message: error }));
});

// Cambiar estado
router.put("/deshabilitar/:id", async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    historiaClinica
        .updateOne({ _id: id }, { $set: { estado } })
        .then((data) => res.status(200).json({ mensaje: "Estado de la historia clinica actualizado" }))
        .catch((error) => res.json({ message: error }));
});

// Actualizar datos de la orden de trabajo
router.put("/actualizar/:id", async (req, res) => {
    const { id } = req.params;
    const { datosPaciente, interrogatorio, antecedentesHeredofamiliares, antecedentesPersonalesPatologicos, antecedentesPersonalesNoPatologicos, signosVitales, estudios, cavidadBucal, procedimientos, odontograma, odontogramaFinal } = req.body;

    await historiaClinica
        .updateOne({ _id: id }, { $set: { datosPaciente, interrogatorio, antecedentesHeredofamiliares, antecedentesPersonalesPatologicos, antecedentesPersonalesNoPatologicos, signosVitales, estudios, cavidadBucal, procedimientos, odontograma, odontogramaFinal } })
        .then((data) => res.status(200).json({ mensaje: "Datos de la historia actualizados" }))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
