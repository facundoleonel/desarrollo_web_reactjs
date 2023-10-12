const {conexion} = require('./config');

/**
 * Esta consulta carga los datos del estudiante
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */
const crear = async (materia) => {
    const consulta = "INSERT INTO materia SET ?";
    const [materiaNuevo] = await conexion.query(consulta, materia);
  
    return buscar(materiaNuevo.insertId);
  };
  
  /**
   * Esta consulta obtiene todos los datos de los estudiantes
   * @param {number} - 1 - activos, 0 - inactivos
   * @returns {object} - array de estudiantes
   */
  const obtener = async () => {
    const [materia] = await conexion.query(`
      SELECT  
        *
      FROM materia WHERE activo = 1;
    `);
    return materia;
  };
  
  /**
   * Esta consulta busca un estudiante
   * @param {number} id - id del estudiante
   * @returns {object} - datos del estudiante encontrado
   */
  const buscar = async (id) => {
    const [[materia]] = await conexion.query(`
      SELECT  
        *
      FROM materia
      WHERE activo = 1 AND idMateria = ?`, id);
    return materia || {};
  };
  
  /**
   * Esta consulta elimina un estudiante
   * @param {number} id - id del estudiante
   * @returns {object} - datos del estudiante encontrado
   */
  const eliminar = async (id) => {
    return await conexion.query(`UPDATE materia SET activo = 0 WHERE idMateria = ${id}`);
  };
  
  /**
   * Esta consulta actualiza un estudiante
   * @param {number} id - id del estudiante
   * @returns {object} - datos del estudiante encontrado
   */
  const actualizar = async (id, nuevosDatos) => {
    const {horasSemanales,nombre,tipoMateria} = nuevosDatos;
  
    const result = await conexion.query(`
        UPDATE materia
        SET
          horasSemanales = ?, nombre = ?, tipoMateria = ? 
        WHERE idMateria = ? AND activo = 1`, 
        [horasSemanales,nombre,tipoMateria, id]);
    return result.affectedRows > 0;
    //result.affectedRows: verifica si se actualizó al menos una fila en la base de datos. 
    //Devolverá true si la actualización fue exitosa y false si no se encontró ningún estudiante 
    //con el ID proporcionado o si no se realizó ninguna actualización.
  };
  
  module.exports = {
    crear,
    obtener,
    buscar,
    eliminar,
    actualizar,
  };