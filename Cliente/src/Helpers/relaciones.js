import axios from "axios";

const baseURL = "http://localhost:3005/api";

export const crearEstudianteCarrera = async (estudiante, carrera) => {
  let result = false;
  await axios
    .post(`${baseURL}/relacion/estudiantecarrera`, { estudiante, carrera })
    .then(({ data }) => {
      const response = data.dato;
      if (Object.values(response).length > 0) {
        result = response;
      }
    })
    .catch(console.log);
  return result;
};

export const crearCarreraMateria = async (idCarrera, idMateria) => {
  let result = false;
  await axios
    .post(`${baseURL}/relacion/carreramateria`, { idCarrera, idMateria })
    .then(({ data }) => {
      const response = data.dato;
      if (Object.values(response).length > 0) {
        result = response;
      }
    })
    .catch(console.log);
  return result;
};
export const crearEstudianteMateria = async (fecha, estudiante, materias) => {
  let result = false;
  await axios
    .post(`${baseURL}/relacion/estudiantemateria`, {
      fecha,
      estudiante,
      materias,
    })
    .then(({ data }) => {
      const response = data.dato;
      if (Object.values(response).length > 0) {
        result = response;
      }
    })
    .catch(console.log);
  return result;
};

export const getEstudianteCarrera = async (id) => {
  let result = {};
  await axios
    .get(`${baseURL}/relacion/estudiantecarrera/${id}`)
    .then(({ data }) => {
      const response = data.dato;
      if (Object.values(response).length > 0) {
        result = response;
      }
    })
    .catch(console.log);
  return result;
};
export const getCarreraMateria = async (id) => {
  let result = {};
  await axios
    .get(`${baseURL}/relacion/carreramateria/${id}`)
    .then(({ data }) => {
      const response = data.dato;
      if (Object.values(response).length > 0) {
        result = response;
      }
    })
    .catch(console.log);
  return result;
};
export const getEstudianteMateria = async (id) => {
  let result = {};
  await axios
    .get(`${baseURL}/relacion/estudiantemateria/${id}`)
    .then(({ data }) => {
      const response = data.dato;
      if (Object.values(response).length > 0) {
        result = response;
      }
    })
    .catch(console.log);
  return result;
};
export const getInscripciones = async () => {
  let result = {};
  await axios
    .get(`${baseURL}/relacion/inscripciones`)
    .then(({ data }) => {
      const response = data.dato;
      if (Object.values(response).length > 0) {
        result = response;
      }
    })
    .catch(console.log);
  return result;
};

const axiosUploadConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export const uploadFile = async (selectedFile) => {
  let result = {};
  let formData = new FormData();
  formData.append("foto", selectedFile);
  await axios
    .post(`${baseURL}/upload`, formData, axiosUploadConfig)
    .then(({ data }) => {
      const response = data.dato;
      if (Object.values(response).length > 0) {
        result = response;
      }
    })
    .catch(console.log);
  return result;
};
