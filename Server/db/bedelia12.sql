-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-09-2023 a las 01:20:27
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bedelia12`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrera`
--

CREATE TABLE `carrera` (
  `idCarrera` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `modadlida` tinyint(1) NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `carrera`
--

INSERT INTO `carrera` (`idCarrera`, `nombre`, `modadlida`, `activo`) VALUES
(1, 'TIDW', 1, 0),
(2, 'Lic en Sistemas', 0, 0),
(3, 'Programador de Sistemas', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreramateria`
--

CREATE TABLE `carreramateria` (
  `idCarreraMateria` int(11) NOT NULL,
  `idCarrera` int(11) NOT NULL,
  `idMateria` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `carreramateria`
--

INSERT INTO `carreramateria` (`idCarreraMateria`, `idCarrera`, `idMateria`, `activo`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 1, 3, 1),
(4, 1, 4, 1),
(5, 1, 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `idEstudiante` int(11) NOT NULL,
  `dni` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `nacionalidad` tinyint(1) NOT NULL DEFAULT 0,
  `correoElectronico` varchar(100) NOT NULL,
  `celular` varchar(50) DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`idEstudiante`, `dni`, `nombre`, `apellido`, `fechaNacimiento`, `nacionalidad`, `correoElectronico`, `celular`, `foto`, `activo`) VALUES
(1, 31685001, 'Lionel', 'Messi', NULL, 0, 'messi@correo.com', NULL, NULL, 1),
(2, 43325068, 'Tomas', 'Villafañe', NULL, 0, 'tomasv@correo.com', NULL, NULL, 1),
(3, 39029137, 'Camila', 'Suarez', NULL, 0, 'camilas@correo.com', NULL, NULL, 1),
(4, 43264515, 'Mateo', 'Barainca', NULL, 0, 'mateob@correo.com', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantecarrera`
--

CREATE TABLE `estudiantecarrera` (
  `idEstudianteCarrera` int(11) NOT NULL,
  `estudiante` int(11) NOT NULL,
  `carrera` int(11) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `estudiantecarrera`
--

INSERT INTO `estudiantecarrera` (`idEstudianteCarrera`, `estudiante`, `carrera`, `fechaAlta`, `fechaBaja`) VALUES
(1, 1, 1, '2023-09-12', NULL),
(2, 2, 1, '2023-09-12', NULL),
(3, 3, 1, '2023-09-12', NULL),
(4, 4, 1, '2023-09-12', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantemateria`
--

CREATE TABLE `estudiantemateria` (
  `idEstudianteMateria` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `estudiante` int(11) NOT NULL,
  `materia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `estudiantemateria`
--

INSERT INTO `estudiantemateria` (`idEstudianteMateria`, `fecha`, `estudiante`, `materia`) VALUES
(6, '2023-09-12', 1, 1),
(7, '2023-09-12', 1, 2),
(8, '2023-09-12', 1, 3),
(9, '2023-09-12', 1, 4),
(10, '2023-09-12', 1, 5),
(11, '2023-09-12', 2, 1),
(12, '2023-09-12', 2, 2),
(13, '2023-09-12', 2, 3),
(14, '2023-09-12', 3, 1),
(15, '2023-09-12', 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `idMateria` int(11) NOT NULL,
  `horasSemanales` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipoMateria` tinyint(1) NOT NULL DEFAULT 1,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`idMateria`, `horasSemanales`, `nombre`, `tipoMateria`, `activo`) VALUES
(1, 7, 'Int. a la Informática', 1, 1),
(2, 7, 'Prog 1', 1, 1),
(3, 7, 'Arq. de Computadoras', 1, 1),
(4, 7, 'Diseño Gráfico', 1, 1),
(5, 7, 'Prog 2', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `tipoUsuario` tinyint(1) NOT NULL DEFAULT 1,
  `correoElectronico` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD PRIMARY KEY (`idCarrera`);

--
-- Indices de la tabla `carreramateria`
--
ALTER TABLE `carreramateria`
  ADD PRIMARY KEY (`idCarreraMateria`),
  ADD KEY `carreraMateria_fk0` (`idCarrera`),
  ADD KEY `carreraMateria_fk1` (`idMateria`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`idEstudiante`);

--
-- Indices de la tabla `estudiantecarrera`
--
ALTER TABLE `estudiantecarrera`
  ADD PRIMARY KEY (`idEstudianteCarrera`),
  ADD KEY `estudianteCarrera_fk0` (`estudiante`),
  ADD KEY `estudianteCarrera_fk1` (`carrera`);

--
-- Indices de la tabla `estudiantemateria`
--
ALTER TABLE `estudiantemateria`
  ADD PRIMARY KEY (`idEstudianteMateria`),
  ADD KEY `estudianteMateria_fk0` (`estudiante`),
  ADD KEY `estudianteMateria_fk1` (`materia`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`idMateria`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `correoElectronico` (`correoElectronico`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrera`
--
ALTER TABLE `carrera`
  MODIFY `idCarrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `carreramateria`
--
ALTER TABLE `carreramateria`
  MODIFY `idCarreraMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `idEstudiante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `estudiantecarrera`
--
ALTER TABLE `estudiantecarrera`
  MODIFY `idEstudianteCarrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `estudiantemateria`
--
ALTER TABLE `estudiantemateria`
  MODIFY `idEstudianteMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `idMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carreramateria`
--
ALTER TABLE `carreramateria`
  ADD CONSTRAINT `carreraMateria_fk0` FOREIGN KEY (`idCarrera`) REFERENCES `carrera` (`idCarrera`),
  ADD CONSTRAINT `carreraMateria_fk1` FOREIGN KEY (`idMateria`) REFERENCES `materia` (`idMateria`);

--
-- Filtros para la tabla `estudiantecarrera`
--
ALTER TABLE `estudiantecarrera`
  ADD CONSTRAINT `estudianteCarrera_fk0` FOREIGN KEY (`estudiante`) REFERENCES `estudiante` (`idEstudiante`),
  ADD CONSTRAINT `estudianteCarrera_fk1` FOREIGN KEY (`carrera`) REFERENCES `carrera` (`idCarrera`);

--
-- Filtros para la tabla `estudiantemateria`
--
ALTER TABLE `estudiantemateria`
  ADD CONSTRAINT `estudianteMateria_fk0` FOREIGN KEY (`estudiante`) REFERENCES `estudiante` (`idEstudiante`),
  ADD CONSTRAINT `estudianteMateria_fk1` FOREIGN KEY (`materia`) REFERENCES `materia` (`idMateria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;