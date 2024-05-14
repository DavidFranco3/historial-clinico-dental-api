const mongoose = require("mongoose");
const { Schema } = mongoose;

// modelo de la coleccion usuarios
const historiaClinica = new Schema({
    datosPaciente: {
        nombre: { type: String },
        edad: { type: String },
        sexo: { type: String },
        escolaridad: { type: String },
        fechaNacimiento: { type: String },
        expediente: { type: String },
        email: { type: String },
        telefono: { type: String },
    },
    interrogatorio: {
        motivoConsulta: { type: String },
        padecimientoActual: { type: String },
        padecimientosSistemticos: { type: String },
        tomandoMedicamento: { type: String },
    },
    antecedentesHeredofamiliares: {
        diabetes: {
            estado: { type: String },
            descripcion: { type: String }
        },
        nefropatias: {
            estado: { type: String },
            descripcion: { type: String }
        },
        cancer: {
            estado: { type: String },
            descripcion: { type: String }
        },
        alergias: {
            estado: { type: String },
            descripcion: { type: String }
        },
        hipertension: {
            estado: { type: String },
            descripcion: { type: String }
        },
        tuberculosis: {
            estado: { type: String },
            descripcion: { type: String }
        },
        cardiopatias: {
            estado: { type: String },
            descripcion: { type: String }
        },
        otros: {
            estado: { type: String },
            descripcion: { type: String }
        },
    },
    antecedentesPersonalesPatologicos: {
        diabetes: {
            estado: { type: String },
            descripcion: { type: String }
        },
        nefropatias: {
            estado: { type: String },
            descripcion: { type: String }
        },
        cancer: {
            estado: { type: String },
            descripcion: { type: String }
        },
        alergias: {
            estado: { type: String },
            descripcion: { type: String }
        },
        transtornosHemorragicos: {
            estado: { type: String },
            descripcion: { type: String }
        },
        hipertension: {
            estado: { type: String },
            descripcion: { type: String }
        },
        tuberculosis: {
            estado: { type: String },
            descripcion: { type: String }
        },
        cardiopatias: {
            estado: { type: String },
            descripcion: { type: String }
        },
        toxicomanias: {
            estado: { type: String },
            descripcion: { type: String }
        },
        grupoSanguineo: {
            estado: { type: String },
            descripcion: { type: String }
        },
    },
    antecedentesPersonalesNoPatologicos: {
        alimentacion: { type: String },
        higiene: { type: String },
        convivenciaConAnimales: { type: String },
        tatuajes: { type: String },
        deportes: { type: String },
        vacunas: { type: String }
    },
    signosVitales: {
        TA: { type: String },
        glucosaCapilar: { type: String },
        temperatura: { type: String },
        FC: { type: String },
        FR: { type: String },
        talla: { type: String },
        peso: { type: String }
    },
    estudios: {
        estudiosGabinete: {
            estado: { type: String },
            descripcion: { type: String },
            imagen: { type: String }
        },
        estudiosLaboratorio: {
            estado: { type: String },
            descripcion: { type: String },
            imagen: { type: String }
        }
    },
    cavidadBucal: {
        tejidosBlandos: { type: String },
        tejidoOseo: { type: String },
        ATM: { type: String },
        dolor: {
            estado: { type: String },
            descripcion: { type: String }
        },
        crepitacion: {
            estado: { type: String },
            descripcion: { type: String }
        },
        subluxacion: {
            estado: { type: String },
            descripcion: { type: String }
        },
        anquilosis: {
            estado: { type: String },
            descripcion: { type: String }
        },
        bruxismo: {
            estado: { type: String },
            descripcion: { type: String }
        },
        espasmoMuscular: {
            estado: { type: String },
            descripcion: { type: String }
        },
        luxacion: {
            estado: { type: String },
            descripcion: { type: String }
        },
        diagnostico: { type: String },
        pronostico: { type: String },
        planTratamiento: { type: String },
    },
    procedimientos: { type: Array, default: [] },
    odontograma: { type: String },
    odontogramaFinal: { type: String },
    estado: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model("historiaClinica", historiaClinica, "historiaClinica");