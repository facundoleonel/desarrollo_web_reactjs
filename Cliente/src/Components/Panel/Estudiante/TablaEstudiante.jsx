import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  BsFillPenFill as IconEdit,
  BsFillTrashFill as IconDelete,
} from "react-icons/bs";
import { useModal } from "../../../hooks/useModal";

import Nacionalidad from "../../../Assets/jsons/nacionalidad.json";
import { EditarEstudiante } from "./EditarEstudiante";
import { formatearFecha } from "../../../Helpers/utils";
const excludeVar = ["activo"];

export const TablaEstudiante = ({ crud, data = [], toFinalAction }) => {
  const IMAGE_URL = process.env.REACT_APP_BASE_URL_IMAGE;
  const [modal, open, close] = useModal(false); // editar
  const [current, setCurrent] = useState({});

  const [thead, setThead] = useState([]);
  const [tbody, setTbody] = useState([]);

  const handleEdit = async (id) => {
    let re = data.find((e) => e.idEstudiante === id);
    setCurrent(re);
    open();
  };

  const handleDelete = async (id) => {
    await crud.eliminar(id);
    close();
    toFinalAction();
  };

  useEffect(() => {
    if (data && data.length > 0) {
      // Setea las keys de el header de la tabla
      const onlyKeys = Object.keys(data[0]) || [];
      const result = onlyKeys.filter((e) => !excludeVar.includes(e));
      setThead(result);
      // Actualiza el visual de nacionalidad

      let tbodyAux = [];
      data.forEach((e) => {
        const nacionalidad = Nacionalidad.find(
          (n) => n.value === e.nacionalidad
        );
        let nacionalidadValue = nacionalidad ? nacionalidad.name : "";

        tbodyAux.push({
          ...e,
          nacionalidad: nacionalidadValue,
          fechaNacimiento: formatearFecha(e.fechaNacimiento),
        });
      });
      setTbody(tbodyAux);
    }
  }, [data]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {thead.length > 0 &&
              thead.map((e, k) => {
                let name = e;
                if (e === "idEstudiante") name = "legajo";
                return <th key={k}>{name}</th>;
              })}
            {thead.length > 0 && <th>Operacion</th>}
          </tr>
        </thead>
        <tbody>
          {tbody &&
            tbody.length > 0 &&
            tbody.map((e, k) => (
              <tr key={k}>
                {Object.keys(e).map(
                  (el, kl) =>
                    !excludeVar.includes(el) && (
                      <td key={kl}>
                        {el === "foto" ? (
                          <img
                            alt="foto"
                            height={80}
                            src={`${IMAGE_URL}/${e[el]}`}
                          />
                        ) : (
                          e[el]
                        )}
                      </td>
                    )
                )}
                <td className="option-buttons" height={100}>
                  <Button
                    variant="success"
                    onClick={() => handleEdit(e.idEstudiante)}
                  >
                    <IconEdit />
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => handleDelete(e.idEstudiante)}
                  >
                    <IconDelete />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <EditarEstudiante
        crud={crud}
        modal={modal}
        close={close}
        estudiante={current}
        finalAction={() => toFinalAction()}
      />
    </>
  );
};
