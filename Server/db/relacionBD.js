const { conexion } = require("./config");

// Creacion de elementos
const crearCM = async (objeto) => {
  const consulta = "INSERT INTO carreramateria SET ?";
  const [nuevo] = await conexion.query(consulta, objeto);
  return buscarCM("carreramateria", "idCarreraMateria", nuevo.insertId);
};
const crearEC = async (objeto) => {
  const consulta = "INSERT INTO estudiantecarrera SET ?";
  const [nuevo] = await conexion.query(consulta, objeto);
  return buscarEC("estudiantecarrera", "idEstudianteCarrera", nuevo.insertId);
};
const crearEM = async (objeto) => {
  const { fecha, estudiante, materias } = objeto;
  const consulta =
    "INSERT INTO estudiantemateria (fecha, estudiante, materia) VALUES ?";
  const values = materias.map((materia) => [fecha, estudiante, materia]);
  const [nuevo] = await conexion.query(consulta, [values]);
  return nuevo;
};

const buscarEC = async (id) => {
  const consulta = `SELECT * FROM estudiantecarrera WHERE estudiante = ?`;
  const [[objeto]] = await conexion.query(consulta, id);
  return objeto || {};
};
const buscarCM = async (id) => {
  const consulta = `SELECT * FROM carreramateria WHERE idCarrera = ?`;
  const items = await conexion.query(consulta, id);
  return items[0] || [];
};
const buscarEM = async (id) => {
  const consulta = `SELECT * FROM estudiantemateria WHERE idEstudianteMateria = ?`;
  const items = await conexion.query(consulta, id);
  return items[0] || [];
};
const getInscripciones = async () => {
  const consulta = `
    SELECT e.nombre, e.apellido, e.dni, c.nombre AS carrera, GROUP_CONCAT(m.nombre) AS materias
    FROM estudiante e
    JOIN estudiantemateria em ON e.idEstudiante = em.estudiante
    JOIN materia m ON em.materia = m.idMateria
    JOIN estudiantecarrera ec ON e.idEstudiante = ec.estudiante
    JOIN carrera c ON ec.carrera = c.idCarrera
    GROUP BY e.nombre, c.nombre;
  `;
  const items = await conexion.query(consulta);
  return items[0] || [];
};

module.exports = {
  crearCM,
  crearEC,
  crearEM,
  buscarEC,
  buscarCM,
  buscarEM,
  getInscripciones,
};
