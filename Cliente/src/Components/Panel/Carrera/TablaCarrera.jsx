import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  BsFillPenFill as IconEdit,
  BsFillTrashFill as IconDelete,
} from "react-icons/bs";
import { EditarCarrera } from "./EditarCarrera";
import { useModal } from "../../../hooks/useModal";
import Modalidades from './../../../Assets/jsons/modalidad.json'
const excludeVar = ["activo"];
export const TablaCarrera = ({ crud, data = [], toFinalAction }) => {
  const [modal, open, close] = useModal(false); // editar
  const [current, setCurrent] = useState({});

  const [thead, setThead] = useState([]);
  const [tbody, setTbody] = useState([]);

  const handleEdit = async (id) => {
    let re = data.find((e) => e.idCarrera === id);
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
      const theads = onlyKeys.filter((e) => !excludeVar.includes(e));
      setThead(theads);
      // Actualiza el visual de nacionalidad

      let tbodyAux = [];
      data.forEach((e) => {
        const modalidad = Modalidades.find(
          (n) => n.value === e.modalidad
        );
        let modalidadValue = modalidad ? modalidad.name : "";

        tbodyAux.push({
          ...e,
          modalidad: modalidadValue
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
            {thead.length > 0 && thead.map((e, k) => {
              let name = e;
              if (e === "idCarrera") name = "Cod";
              return <th key={k}>{name}</th>;
            })}
            {thead.length > 0 && <th>Operacion</th> }
            
          </tr>
        </thead>
        <tbody>
          {tbody &&
            tbody.length > 0 &&
            tbody.map((e, k) => (
              <tr key={k}>
                {Object.keys(e).map((el, kl) =>
                  !excludeVar.includes(el) ? <td key={kl}>{e[el]}</td> : ""
                )}
                <td className="option-buttons">
                  <Button
                    variant="success"
                    onClick={() => handleEdit(e.idCarrera)}
                  >
                    <IconEdit />
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => handleDelete(e.idCarrera)}
                  >
                    <IconDelete />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <EditarCarrera
        crud={crud}
        modal={modal}
        close={close}
        item={current}
        finalAction={() => toFinalAction()}
      />
    </>
  );
};
